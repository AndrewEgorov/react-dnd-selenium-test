import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class FruitBasketTest {
    public static void main(String[] args) {
        ChromeDriver driver = new ChromeDriver();
        driver.get("https://crukorg.github.io/react-dnd-selenium-test/");

        // Load jQuery and the JS script workaround for HTML5 drag and drop
        driver.executeScript(loadJavascript("resources/jquery-3.3.1.min.js"));
        driver.executeScript(loadJavascript("resources/dragdrop.js"));

        // Simulate dragging the apple to the box
        driver.executeScript("$('.apple').simulateDragDrop({dropTarget: '.box'})");

        // Get the output message and print it
        WebElement type = driver.findElementByClassName("app--type");
        String text = type.getText();
        System.out.println("Message: " + text);
    }

    private static String loadJavascript(String resource) {
        ClassLoader classloader = Thread.currentThread().getContextClassLoader();
        InputStream stream = classloader.getResourceAsStream(resource);
        BufferedReader reader = null;
        String line;
        StringBuffer buffer = new StringBuffer();

        try {
            reader = new BufferedReader(new InputStreamReader(stream));

            while ((line = reader.readLine()) != null) {
                buffer.append(line + '\n');
            }
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }

        return buffer.toString();
    }
}

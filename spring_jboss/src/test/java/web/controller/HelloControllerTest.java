package web.controller;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class HelloControllerTest {


    @Test
    public void getHelloName() {
        HelloController helloController = new HelloController();
        String name = helloController.getName();
        assertEquals(name, "hello");
    }
}

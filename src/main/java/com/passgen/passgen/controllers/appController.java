
package com.passgen.passgen.controllers;

import java.util.Map;

import org.apache.commons.lang3.RandomStringUtils;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class appController {
    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(Model model) {
        model.addAttribute("password", "Just click the button below 😎");
        return "index";
    }

    @RequestMapping(value = "/", method = RequestMethod.POST)
    public String createPass(@RequestParam Map requestParams, Model model) {
        // get length
        String leng = (String) requestParams.get("length");
        Integer length = Integer.parseInt(leng);

        // upper + lower + num
        String defaultPass = RandomStringUtils.randomAlphanumeric(length);

        // upper + lower + num + symbols
        String comple = RandomStringUtils.randomAscii(length);

        // get symbol
        String sy = (String) requestParams.get("symbols");
        if (sy != null) {
            Boolean symbols = sy.equals("on") ? true : false;
            if (symbols) {
                model.addAttribute("password", comple);
            }
            return "index";
        }

        model.addAttribute("password", defaultPass);
        return "index";
    }

}

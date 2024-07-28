package com.evg.approot.rest;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@Slf4j
public class RootUrl {
    @GetMapping(value = "/drones", produces = MediaType.TEXT_HTML_VALUE)
    public String getPage() {
        log.info("getting drones page");
        RestTemplate template = new RestTemplate();
        String resourceUrl = "http://10.244.0.4:8083";
        return template.getForObject(resourceUrl, String.class);
    }
//    public Flux<String> getInfo() {
//        log.info("getting drones page");
//        return WebClient.create()
//                .get()
//                .uri(URI.create("http://10.244.0.4:8083"))
//                .retrieve()
//                .bodyToFlux(String.class);
//    }
}

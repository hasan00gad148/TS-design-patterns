import Proxy from "./proxy";




let proxy = new Proxy(["badGoogle.com", "badReddit.com", "badTwitter.com"]);

proxy.connectionto("badGoogle.com")
proxy.connectionto("Reddit.com")





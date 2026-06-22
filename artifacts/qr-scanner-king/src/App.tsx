import { Switch, Route, Router as WouterRouter } from "wouter";
import Home from "@/pages/home";
import UrlQR from "@/pages/qr/url";
import WifiQR from "@/pages/qr/wifi";
import VcardQR from "@/pages/qr/vcard";
import TextQR from "@/pages/qr/text";
import SocialQR from "@/pages/qr/social";
import BlogIndex from "@/pages/blog/index";
import BlogPost from "@/pages/blog/post";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/qr/url" component={UrlQR} />
      <Route path="/qr/wifi" component={WifiQR} />
      <Route path="/qr/vcard" component={VcardQR} />
      <Route path="/qr/text" component={TextQR} />
      <Route path="/qr/social" component={SocialQR} />
      <Route path="/blog" component={BlogIndex} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Router />
    </WouterRouter>
  );
}

export default App;

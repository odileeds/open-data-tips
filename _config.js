import lume from "lume/mod.ts";
import base_path from "lume/plugins/base_path.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume({
  src: "/src",
  location: new URL('https://odileeds.github.io/open-data-tips/'),
});

site.use(base_path());
site.use(metas());
site.use(minify_html());
site.use(postcss());

site.filter('excerpt', (content) => content.split(/\n{2,}/g)[0])

site.remoteFile('index.md', 'README.md');

export default site;

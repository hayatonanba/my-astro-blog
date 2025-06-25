export default function remarkAssetPathPlugin() {
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('/src/content/assets/')) {
        const filename = node.url.split('/').pop();
        node.url = `https://<account>.r2.dev/assets/${filename}`;
      }
    });
  };
}

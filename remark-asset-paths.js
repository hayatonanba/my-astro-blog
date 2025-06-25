export default function remarkAssetPathPlugin() {
  const base = process.env.R2_PUBLIC_URL;
  return (tree) => {
    visit(tree, 'image', (node) => {
      if (node.url.startsWith('/src/content/assets/')) {
        const filename = node.url.split('/').pop();
        node.url = `${base}/${filename}`;
      }
    });
  };
}

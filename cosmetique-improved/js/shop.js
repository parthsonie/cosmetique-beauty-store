(function () {
  if (!window.React || !window.ReactDOM) return;

  const products = [
    {
      name: "Foundation",
      price: "Rs. 799",
      image: "assets/shop/comsmetic-1.jpg",
      text: "Light base makeup for an even finish.",
    },
    {
      name: "Crimson Red Lipstick",
      price: "Rs. 899",
      image: "assets/shop/cosmetic-2.jpg",
      text: "A rich red shade for a confident look.",
    },
    {
      name: "Eye Liner",
      price: "Rs. 599",
      image: "assets/shop/cosmetic-3.jpg",
      text: "Smooth liner for a clean everyday eye look.",
    },
    {
      name: "Hair Dryer",
      price: "Rs. 2199",
      image: "assets/shop/cosmetic-4.jpg",
      text: "A compact dryer for quick styling.",
    },
    {
      name: "Black Stone Perfume",
      price: "Rs. 999",
      image: "assets/shop/cosmetic-5.jpg",
      text: "A deep fragrance for daily use.",
    },
    {
      name: "Rose Water",
      price: "Rs. 299",
      image: "assets/shop/cosmetic-6.jpg",
      text: "Refreshing rose water for skin care.",
    },
  ];

  function ProductCard({ product }) {
    return React.createElement(
      "article",
      { className: "product-card reveal visible" },
      React.createElement("img", { src: product.image, alt: product.name }),
      React.createElement(
        "div",
        null,
        React.createElement("h3", null, product.name),
        React.createElement("p", { className: "price" }, product.price),
        React.createElement("p", null, product.text),
        React.createElement("a", { className: "small-button", href: "login.html" }, "Buy Now")
      )
    );
  }

  function ProductGrid() {
    return React.createElement(
      React.Fragment,
      null,
      products.map((product) =>
        React.createElement(ProductCard, { key: product.name, product })
      )
    );
  }

  const root = document.getElementById("product-root");
  if (root) ReactDOM.createRoot(root).render(React.createElement(ProductGrid));
})();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const content = document.getElementById("content");

// Toggle mobile menu
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Page content templates
const pages = {
  home: `
    <section class="hero">
      <h1>Welcome to My Website</h1>
      <p>This is a responsive single-page website.</p>
    </section>
  `,
  blog: `
    <section class="content">
      <h1>Blog Page</h1>
      <p>Welcome to the blog page. Stay tuned for updates!</p>
    </section>
  `,
  about: `
    <section class="content">
      <h1>About Us</h1>
      <p>This is the About page of our responsive website.</p>
    </section>
  `,
  contact: `
    <section class="content">
      <h1>Contact Us</h1>
      <form class="contact-form">
        <input type="text" placeholder="Your Name" required>
        <input type="email" placeholder="Your Email" required>
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  `,
};

// Handle navigation clicks
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");
    content.innerHTML = pages[page];

    // Update active class
    document
      .querySelectorAll(".nav-link")
      .forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");

    // Close mobile menu on click
    navLinks.classList.remove("show");
  });
});

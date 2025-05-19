document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Message sent!');
    this.reset();
  });

  const sections = document.querySelectorAll('.section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Lazy loading functionality
  let loading = false;

  const loadMoreProjects = () => {
    if (loading) return;
    loading = true;

    const loadingText = document.getElementById('loading');
    loadingText.style.display = 'block';

    // Simulate network request or fetch more content
    setTimeout(() => {
      const newProjects = `
        <div class="project-card">
          <h3>Project Four</h3>
          <p>A photo gallery app built with React.</p>
        </div>
        <div class="project-card">
          <h3>Project Five</h3>
          <p>A blog site with CMS functionality.</p>
        </div>
      `;
      document.getElementById('project-list').insertAdjacentHTML('beforeend', newProjects);
      loadingText.style.display = 'none';
      loading = false;
    }, 1500);
  };

  const projectsSection = document.getElementById('projects');
  const observerProjects = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadMoreProjects();
      }
    });
  }, { threshold: 1.0 });

  observerProjects.observe(projectsSection);
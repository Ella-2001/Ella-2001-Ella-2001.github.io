function showSection(id) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
      section.classList.remove('active');
      section.classList.add('hidden');
    });
  
    const activeSection = document.getElementById(id);
    activeSection.classList.add('active');
    activeSection.classList.remove('hidden');
  }
  
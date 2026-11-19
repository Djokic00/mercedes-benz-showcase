// Set current year
const yearEl = document.querySelector('.year')
const currentYear = new Date().getFullYear()
yearEl.textContent = currentYear

// Smooth scrolling animation
const allLinks = document.querySelectorAll('a[href]')

allLinks.forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href')

    if (!href || !href.startsWith('#')) return

    e.preventDefault()

    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      return
    }

    const sectionEl = document.querySelector(href)
    if (!sectionEl) return

    sectionEl.scrollIntoView({ behavior: 'smooth' })
  })
})

// Changing active tabs
const tabs = document.querySelector('.vehicle-types')
tabs.addEventListener('click', e => {
  e.preventDefault()
  const clicked = e.target
  console.log('clicked', clicked)
  if (clicked.classList.contains('vehicle-type')) {
    document.querySelector('.vehicle-type--active').classList.remove('vehicle-type--active')
    clicked.classList.add('vehicle-type--active')
  }
})

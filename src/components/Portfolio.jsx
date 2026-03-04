import { Component } from 'react';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

// Данные
const projectsData = [
  {
    img: "img/mon.jpg",
    category: "Business Cards"
  }, 
  {
    img: "img/200.jpg",
    category: "Websites"
  }, 
  {
    img: "img/emi_haze.jpg",
    category: "Websites"
  }, 
  {
    img: "img/codystretch.jpg",
    category: "Websites"
  }, 
  {
    img: "img/Triangle_003.jpg",
    category: "Business Cards"
  }, 
  {
    img: "img/place200x290.png",
    category: "Websites"
  }, 
  {
    img: "img/200.jpg",
    category: "Websites"
  }, 
  {
    img: "img/transmission.jpg",
    category: "Business Cards"
  }, 
  {
    img: "img/place200x290_1.png",
    category: "Websites"
  }, 
  {
    img: "img/place200x290_2.png",
    category: "Flayers"
  }, 
  {
    img: "img/the_ninetys_brand.jpg",
    category: "Websites"
  }, 
  {
    img: "img/dia.jpg",
    category: "Business Cards"
  }, 
  {
    img: "img/Triangle_350x197.jpg",
    category: "Websites"
  }, 
  {
    img: "img/emi_haze.jpg",
    category: "Websites"
  }, 
  {
    img: "img/transmission.jpg",
    category: "Business Cards"
  }, 
  {
    img: "img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, 
  {
    img: "img/place200x290_3.png",
    category: "Flayers"
  }
];

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: 'All'
    };
    // Привязываем обработчик к контексту
    this.handleSelectFilter = this.handleSelectFilter.bind(this);
  }

  handleSelectFilter(filter) {
    this.setState({ selectedFilter: filter });
  }

  getFilteredProjects() {
    const { selectedFilter } = this.state;
    
    if (selectedFilter === 'All') {
      return projectsData;
    }
    
    return projectsData.filter(project => project.category === selectedFilter);
  }

  getUniqueCategories(projects) {
    const categories = projects.map(project => project.category);
    const uniqueCategories = ['All', ...new Set(categories)];
    return uniqueCategories;
  };

  render() {
    const { selectedFilter } = this.state;
    const filters = this.getUniqueCategories(projectsData);
    const filteredProjects = this.getFilteredProjects();

    return (
      <div className="portfolio">
        <Toolbar 
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projects={filteredProjects} />
      </div>
    );
  }
}

export default Portfolio;

import Start from './start';
import searchResultList from '../templates/poster.hbs';

import { onLoader, offLoader } from './loader';

export default class Search extends Start {
  constructor(genres) {
    super();
    super.getRefs().form.addEventListener('submit', this.onSubmit.bind(this));

    this.observerItem = super.getRefs().sentinel;
    this.genres = genres;
  }

  async onSubmit(e) {
    e.preventDefault();

    this.observerItem.dataset.observe = 'search';

    const {
      elements: {
        searchQuery: { value },
      },
    } = e.target;

    localStorage.setItem('searchQuery', JSON.stringify(value));

    super.resetPage();

    onLoader();

    const data = await super.fetchSerchQuery(value);
    
    offLoader();

    if (!data.data.results.length) {
      super.getRefs().filmsContainer.innerHTML = `<li class='nothing'>Sorry, we find nothing</li>`;
      return;
    }
    
    const finalData = super.getFinalData(data, this.genres);
    
    super.getRefs().filmsContainer.innerHTML = searchResultList(finalData);
    super.getRefs().form.reset();
  }
}


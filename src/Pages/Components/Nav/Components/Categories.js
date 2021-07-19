import React, { useState, useEffect } from 'react';
import './Categories.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Categories = props => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const { closeHover } = props;

  useEffect(() => {
    Promise.all([
      fetch('/data/categories.json'),
      fetch('/data/mainCategories.json'),
    ])
      .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
      .then(([categories, main]) => {
        console.log({ categories, main });
        setCategoriesList(categories.CATEGORIES);
        setMainCategories(main.CATEGORIES);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(categoriesList);
  console.log(mainCategories);

  return (
    <div className="categories" onMouseLeave={closeHover}>
      <div className="mask flex">
        <div className="categoriesBox">
          {categoriesList.map(main => {
            return (
              <div key={main.id} className="mainCategory">
                <ul className="flex">
                  <li className="mainListBox">
                    <div className="mainList">
                      {main.category}
                      <span>
                        <FontAwesomeIcon icon={faChevronRight} />
                      </span>
                    </div>
                    <div>
                      {main.sub_category &&
                        main.sub_category.map(sub => {
                          return <div key={sub.id}>{sub.name}</div>;
                        })}
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
        <div className="mainCategoriesBox">
          {mainCategories.map(main => {
            return (
              <div key={main.id} className="mainTitle">
                <div>{main.category}</div>
                <span>
                  <FontAwesomeIcon icon={faChevronRight} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

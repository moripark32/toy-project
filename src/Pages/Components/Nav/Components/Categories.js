import React, { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('/data/categories.json'),
      fetch('/data/mainCategories.json'),
    ])
      .then(([res1, res2]) => [res1.json(), res2.json()])
      .then(([categories, main]) => {
        setCategoriesList(categories.CATEGORIES),
          setMainCategories(main.CATEGORIES);
      })
      .catch(err => console.log(err));
  }, []);

  console.log(categoriesList);

  return (
    <div className="categories">
      {categoriesList.map(main => {
        return (
          <div key={main.id} className="mainCategory">
            <ul>
              <li>
                {main.category}
                <ul>
                  {main.sub_category &&
                    main.sub_category.map(sub => {
                      return <li key={sub.id}>{sub.name}</li>;
                    })}
                </ul>
              </li>
            </ul>
          </div>
        );
      })}
      {mainCategories.map(item => {
        <ul>
          <li>{item.category}</li>
        </ul>;
      })}
    </div>
  );
};

export default Categories;

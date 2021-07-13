import React, { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = props => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [mainCategories, setMainCategories] = useState([]);
  const { closeHover } = props;

  // useEffect(() => {
  //   fetch('/data/categories.json')
  //     .then(res => res.json())
  //     .then(list => {
  //       setCategoriesList(list.CATEGORIES);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // Promise.all([]);

  useEffect(() => {
    Promise.all([
      fetch('/data/categories.json'),
      fetch('/data/mainCategories.json'),
    ])
      // .then(([res1, res2]) => [res1.json(), res2.json()])
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
        </div>
        <div className="mainCategoriesBox">
          {mainCategories.map(main => {
            return (
              <div key={main.id} className="mainTitle">
                {main.category}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;

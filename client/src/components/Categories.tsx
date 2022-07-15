import React from "react";

interface Category {
  id: number;
  name: string;
}

const Categories = () => {
  const categories: Category[] = [
    {
      id: 0,
      name: "Software",
    },
    {
      id: 1,
      name: "Science",
    },
    {
      id: 2,
      name: "Politics",
    },
    {
      id: 3,
      name: "Sports",
    },
    {
      id: 4,
      name: "Food",
    },
  ];
  return (
    <section className="">
      <h2 className="p-6 ml-5 text-left">CATEGORIES</h2>
      <div className="flex flex-row flex-wrap max-w-sm pt-8">
        {categories.map((category: Category) => (
          <a
            key={category.id}
            href="category.html"
            className="inline-flex items-center py-2 px-3 m-1 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {category.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Categories;

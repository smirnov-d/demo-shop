module.exports = () => {
  const data = {
    categories: [],
    products: [],
  }

  for (let i = 0; i < 10; i++) {
    data.categories.push({
      id: i,
      name: `category-${i}`,
    })
  }

  const categoriesIds = data.categories.map(({id}) => id);

  for (let i = 0; i < 100; i++) {
    data.products.push({
      id: i,
      name: `product${i}`,
      description: getDescription(),
      categoryId: categoriesIds[getRandomInt(categoriesIds.length)],
      image: 'https://picsum.photos/200',
      price: getRandomInt(10000)
    })
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }

  function getDescription(countParagraph = Math.floor(Math.random() * 5)) {
    let description = '';
    const placeholders = [
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dignissimos ea et ex explicabo fuga maiores maxime nemo, numquam pariatur repudiandae tempora, totam ullam veritatis voluptates? Cumque est hic temporibus',
      'Равным образом рамки и место обучения кадров требуют от нас анализа соответствующий условий активизации. Разнообразный и богатый опыт постоянный количественный рост и сфера нашей активности требуют от нас анализа системы обучения кадров, соответствует насущным потребностям.',
      'Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет оценить значение новых предложений. Задача организации, в особенности же постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач.',
      'Повседневная практика показывает, что реализация намеченных плановых заданий играет важную роль в формировании систем массового участия. Разнообразный и богатый опыт дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений.',
    ];

    for (let i = 0; i < countParagraph; i++) {
      const randomItem = placeholders[getRandomInt(placeholders.length)];
      const randomLength = randomItem.slice(0, getRandomInt(randomItem.length));
      description += `<p>${randomLength}</p>`;
    }

    return description;
  }

  return data
}

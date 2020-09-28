function renderHome() {
  const content = document.querySelector('.wrapper-content');
  content.innerHTML = `<div class="content-home">
  <h1>Welcome to my restaurant!</h1>
  <p>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut dolorem debitis
    rem, et vero assumenda veritatis vel quo explicabo distinctio consequuntur
    voluptate, error veniam accusamus. Esse et modi excepturi suscipit! Unde
    repellendus perferendis quas totam laboriosam, itaque quo consequatur id!
  </p>
</div>`;
}

export { renderHome };

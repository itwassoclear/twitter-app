class Twitter {
  constructor({ listElem }) {
    this.tweets = new Posts();
    this.elements = {
      listElem: document.querySelector(listElem),
    };
  }

  renderPosts() {}

  showUserPost() {}

  shiwLikesPost() {}

  showAllPost() {}

  openModal() {}
}

class Posts {
  constructor({ posts = [] } = {}) {
    this.posts = posts;
  }

  addPost(tweet) {
    this.tweets.push(new Post(tweet));
  }

  deletePost(id) {}
}

class Post {
  constructor() {
    this.id = param.id;
    this.nickname = param.nickname;
    this.username = param.username;
    this.postDate = param.postDate;
    this.text = param.text;
    this.img = param.img;
    this.likes = param.likes;
    this.liked = false;
  }

  changeLike() {
    this.liked = !this.liked;
    if (this.liked) {
      this.likes++;
    } else {
      this.likes--;
    }
  }
}

const twitter = new Twitter({ listElem: ".tweet-list" });
console.log(twitter);

const Blog = require("../Model/Blogs");
const News = require("../Model/News");

const loginPage = (request,response) => {
 // response.render('index.ejs')
  response.redirect('/blogs');

}
const signUp = (request,response) => {
  response.render('signUp.ejs');
}
const authSignUp = (request,response) => {
  console.log(request.body)
}
const login = (request, response) => {
  console.log(request.body)
}
const Blogs = (request, response) => {
  
    Blog.find().sort({createdAt: -1})
    .then((result) => {
      response.render('home.ejs',{blogs: result});
    })
    .catch((err) => {
      throw err
    })
  
}
const news = (request,response) => {
  
  
    News.find().sort({createdAt: -1})
    .then((result) => {
      response.render('news.ejs',{ news:result })
    })
    .catch((err) => {
      throw err
    })
}
const Create = (request,response) => {
  response.render('create.ejs')
  
  
}


const postBlog = (request,response) => {
  const blog = new Blog(request.body)
  console.log(request.body)
  blog.save()
    .then((result) => {
      response.redirect('/')
    })
    .catch((err) => {
      throw err
    })
}
const postNews = (request,response) => {
  const news = new News(request.body)
  console.log(request.body)
  news.save()
    .then((result) => {
      response.redirect('/News')
    })
    .catch((err) => {
      throw err
    })
}
const singleBlog = (request,response) => {
  const id = request.params.id
  Blog.findById(id)
  .then((data) => {
    response.render('details.ejs',{data})
  })
  
  
}
const singleNews = (request,response) => {
  const id = request.params.id
  News.findById(id)
  .then((data) => {
    response.render('details.ejs',{data})
  })
}
const deleteOne = (request,response) => {
  const id = req.params.id;
 
  Blog.findByIdAndDelete(id)
  .then((result) => {
    res.json( { redirect: '/'} )
  })
  .catch((err) => {
    console.log(err)
  })
 /*
    News.findByIdAndDelete(id)
  .then((result) => {
    res.json( { redirect: '/'} )
  })
  .catch((err) => {
    console.log(err)
  })
  }
  */
}
module.exports = {
  signUp ,
  authSignUp ,
  login ,
  Blogs ,
  loginPage,
  news,
  Create,
  singleBlog ,
  postBlog ,
  postNews  ,
  singleNews ,
  deleteOne
};
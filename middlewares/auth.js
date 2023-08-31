const isLogin = function (req,res,next){
  console.log(req.session);
  if(!req.session.userId){
      const error = 'Please Login first'
      res.redirect(`/login?error=${error}`)
  }else{
      next()
  }
}

const isAdmin = function (req,res,next){ 
  console.log(req.session);
  if(req.session.userId && req.session.role !== 'eventOrganizer'){
      const error = 'You Have No access'
      res.redirect(`/login?error=${error}`)
  }else{
      next()
  }
}

const isUser = function (req,res,next){ 
  console.log(req.session);
  if(req.session.userId && req.session.role !== 'user'){
      const error = 'You Have No access'
      res.redirect(`/login?error=${error}`)
  }else{
      next()
  }
}


module.exports = {isLogin, isAdmin, isUser}
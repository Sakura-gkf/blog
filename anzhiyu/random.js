var posts=["2023/07/21/Arch安装Open-Vm-Tools/","2023/03/04/Aurora主题安装全过程/","2023/07/23/GithubPages子目录部署Hexo/","2023/03/12/HTTP/","2023/04/03/Hexo部署服务器免密Deploy方式/","2023/01/27/JDBC/","2023/03/13/SqlSessionFactory工具类创建/","2023/03/12/Tomcat部署出现的问题小计/","2023/08/18/Window终端代理/","2023/08/18/volatility/","2023/03/05/数据库语言/","2023/08/18/邮件钓鱼/","2023/03/11/面向对象学习中遇到的问题/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};
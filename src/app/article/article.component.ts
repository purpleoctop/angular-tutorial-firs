import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
article;
  constructor(
    private router: Router,
    private routerState: ActivatedRoute,
    private newsService: NewsService
  ) { }

  ngOnInit() {
    this.routerState.paramMap.subscribe((params) => {
      const articleId = +params.get('articleId');
      const article = this.newsService.getArticle(articleId);
      if (!article) {
        this.router.navigate(['Error']);
      }
      this.article = article;
    });
  }

}

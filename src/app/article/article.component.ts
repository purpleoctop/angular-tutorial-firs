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
      const articleId = +params.get('ArticleId');
      const article = this.newsService.getArticle(articleId);
      this.article = article;
    });
  }

}

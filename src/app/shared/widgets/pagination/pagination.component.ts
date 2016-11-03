import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { isDefined } from '../../utils'

interface Page {
  number: number,
  text: string,
  active: boolean
}

// <cvi-pagination
//   [totalPages]="totalPages"
//   [currentPage]="currentPage"
//   [maxSize]="maxSize"></cvi-pagination>

@Component({
  selector: 'cvi-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() totalPages: number;
  @Input() currentPage: number;
  @Input() maxSize: number;

  @Output() pageChange = new EventEmitter();

  private pages: Page[];

  constructor() { }

  ngOnInit() {
    this.pages = this.getPages(this.currentPage);
  }

  getPages(currentPage: number): Page[] {
    let pages: Page[] = [];
    let startPage = 1, endPage = this.totalPages;
    let isMaxSized = isDefined(this.maxSize) && this.maxSize < this.totalPages;

    // recompute if maxSize
    if (isMaxSized) {
      // Current page is displayed in the middle of the visible ones
      startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
      endPage = startPage + this.maxSize - 1;

      // Adjust if limit is exceeded
      if (endPage > this.totalPages) {
        endPage = this.totalPages;
        startPage = endPage - this.maxSize + 1;
      }
    }

    // Add page number links
    for (var number = startPage; number <= endPage; number++) {
      var page = this.makePage(number, String(number), number === currentPage);
      pages.push(page);
    }

    // Add links to move between page sets
    if (isMaxSized && this.maxSize > 0) {
      if (startPage > 1) {
        if (startPage > 3) { //need ellipsis for all options unless range is too close to beginning
          var previousPageSet = this.makePage(startPage - 1, '...', false);
          pages.unshift(previousPageSet);
        }
        if (startPage === 3) { //need to replace ellipsis when the buttons would be sequential
          var secondPageLink = this.makePage(2, '2', false);
          pages.unshift(secondPageLink);
        }
        //add the first page
        var firstPageLink = this.makePage(1, '1', false);
        pages.unshift(firstPageLink);
      }

      if (endPage < this.totalPages) {
        if (endPage < this.totalPages - 2) { //need ellipsis for all options unless range is too close to end
          var nextPageSet = this.makePage(endPage + 1, '...', false);
          pages.push(nextPageSet);
        }
        if (endPage === this.totalPages - 2) { //need to replace ellipsis when the buttons would be sequential
          var secondToLastPageLink = this.makePage(this.totalPages - 1, this.totalPages - 1, false);
          pages.push(secondToLastPageLink);
        }
        //add the last page
        var lastPageLink = this.makePage(this.totalPages, this.totalPages, false);
        pages.push(lastPageLink);
      }
    }

    return pages;

  }

  makePage(number, text, isActive) {
    return {
      number: number,
      text: text,
      active: isActive
    };
  }

  noPrevious(): boolean {
    return this.currentPage == 1;
  }

  noNext(): boolean {
    return this.currentPage == this.totalPages;
  }

  selectPage(page, event): void {
    if(page < 1 ||  page > this.totalPages){
      return;
    }
    this.currentPage = page;
    this.pages = this.getPages(this.currentPage);
    this.pageChange.emit(page);
  }

}

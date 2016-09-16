import { ProjectRPage } from './app.po';

describe('project-r App', function() {
  let page: ProjectRPage;

  beforeEach(() => {
    page = new ProjectRPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

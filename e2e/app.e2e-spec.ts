import { LifecycleHooksPart5Page } from './app.po';

describe('lifecycle-hooks-part-5 App', function() {
  let page: LifecycleHooksPart5Page;

  beforeEach(() => {
    page = new LifecycleHooksPart5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

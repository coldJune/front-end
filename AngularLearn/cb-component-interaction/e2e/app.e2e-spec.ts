import { AppPage } from './app.po';
import {by, element} from "protractor";

describe('cb-component-interaction App', () => {
  let page: AppPage;
  let _heroName = ['cui' , 'deng', 'deng'];
  let _masterName = 'Master';


  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
  it('should pass properties to children properly', () => {
    let parent = element.all(by.tagName('app-hero-parent')).get(0);
    let heroes = parent.all(by.tagName('app-hero-child'));
    for (let i = 0; i < _heroName.length; i++) {
      let childTitle = heroes.get(i).element(by.tagName('h3')).getText();
      let childDetail = heroes.get(i).element(by.tagName('p')).getText();
      expect(childTitle).toEqual(_heroName[i] + 'says:');
      expect(childDetail).toContain(_masterName);
    }
  });
});

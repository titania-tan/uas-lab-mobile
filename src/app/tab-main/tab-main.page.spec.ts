import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabMainPage } from './tab-main.page';

describe('TabMainPage', () => {
  let component: TabMainPage;
  let fixture: ComponentFixture<TabMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabMainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

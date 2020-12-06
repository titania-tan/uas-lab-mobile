import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabFriendsPage } from './tab-friends.page';

describe('TabFriendsPage', () => {
  let component: TabFriendsPage;
  let fixture: ComponentFixture<TabFriendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabFriendsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabFriendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

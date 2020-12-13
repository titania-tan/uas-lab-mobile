import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegisPage } from './regis.page';

describe('RegisPage', () => {
  let component: RegisPage;
  let fixture: ComponentFixture<RegisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

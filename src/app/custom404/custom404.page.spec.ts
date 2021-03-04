import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Custom404Page } from './custom404.page';

describe('Custom404Page', () => {
  let component: Custom404Page;
  let fixture: ComponentFixture<Custom404Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Custom404Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Custom404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

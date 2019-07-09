import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDemoComponent } from './chat-demo.component';

describe('ChatDemoComponent', () => {
  let component: ChatDemoComponent;
  let fixture: ComponentFixture<ChatDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

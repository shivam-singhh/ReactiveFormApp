import { ChangeDetectionStrategy, Component, ComponentRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { take} from 'rxjs/operators';
import { Interest, InterestEditDetails, InterestForm } from '../../interest.model';
import { InterestFormPresentationComponent } from '../interest-form-presentation/interest-form-presentation.component';
import { InterestListPresenterService } from '../interest-list-presenter/interest-list-presenter.service';

import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';

@Component({
  selector: 'app-interest-list-presentation',
  templateUrl: './interest-list-presentation.component.html',
  styleUrls: ['./interest-list-presentation.component.css'],
  viewProviders: [InterestListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InterestListPresentationComponent implements OnInit, OnDestroy {

  /** setter for user list */
  @Input() public set userList(value: Interest[] | null) {
    if (value) {
      this._userList = value;
      this.tempUserList = value;
    }
  }
  public get userList(): Interest[] | null {
    return this._userList;
  }

  /** emits user id to be deleted */
  @Output() public deleteUser: EventEmitter<number>;
  /** emitter to emit add user data */
  @Output() public addUser: EventEmitter<InterestForm>;
  /** emitter to emit edit user details */
  @Output() public editUser: EventEmitter<InterestEditDetails>;
  /** emitter search user details */
  @Output() public searchUser: EventEmitter<InterestEditDetails>;
  /** emitter next page */
  @Output() public nextPage: EventEmitter<InterestEditDetails>;
  /** emitter previous page */
  @Output() public prevPage: EventEmitter<InterestEditDetails>;

  /** temp user list for displaying in table */
  public tempUserList!: Interest[];
  /** user id */
  public userId!: number;
  /** search field control object */
  public search: FormControl;

  private _userList: Interest[];
  /** to destroy the subscriptions  */
  private destroy: Subject<void>;

  constructor(
    private interestListPresenterService: InterestListPresenterService,
    private overlay: Overlay,
  ) {
    this._userList = [];
    this.deleteUser = new EventEmitter();
    this.addUser = new EventEmitter();
    this.editUser = new EventEmitter();
    this.searchUser = new EventEmitter();
    this.nextPage = new EventEmitter();
    this.prevPage = new EventEmitter();
    this.search = new FormControl();
    this.destroy = new Subject();
  }

  ngOnInit(): void {
    this.interestListPresenterService.userId$.subscribe((id: number) => {
      this.deleteUser.emit(id);
    })
  }

  /** on delete button click */
  public onDelete(id: number) {
    this.interestListPresenterService.deleteUser(id)
  }

   /** on add button click */
   public onAdd() {
    this.openUserForm();
  }

  /** on edit button click */
  public onEdit(item: Interest) {
    this.userId = item.id;
    this.openUserForm(item);
  }

  /** on search button click */
  public onSearch(key: any) {
    this.searchUser.emit(key);
  }

  /** on next button click */
  public pageUp() {
    this.nextPage.emit();
  }

  /** on next button click */
  public pageDown() {
    this.prevPage.emit();
  }

  /**
   * open user form dialog
   * @param userData user data - Optional
   */
   public openUserForm(userData?: Interest) {
    let componentRef: ComponentRef<InterestFormPresentationComponent>;
    let overlayRef: OverlayRef;
    // set overlay config
    let overlayConfig: OverlayConfig = new OverlayConfig();
    overlayConfig.hasBackdrop = true;
    // create overlay reference
    overlayRef = this.overlay.create(overlayConfig);
    const portal: ComponentPortal<InterestFormPresentationComponent> = new ComponentPortal<InterestFormPresentationComponent>(InterestFormPresentationComponent);
    // attach overlay with portal
    componentRef = overlayRef.attach(portal);
    // listen to backdrop click
    overlayRef.backdropClick()
      .pipe(take(1)).subscribe(() => {
        overlayRef.detach();
      });

    // pass user data as input
    componentRef.instance.userData = userData as Interest;
    // listen to cancel event
    componentRef.instance.cancel.subscribe((res) => {
      overlayRef.detach();
    })
    // listen to add user event
    componentRef.instance.addUser.subscribe((res: InterestForm) => {
      this.addUser.emit(res);
    })
    // listen to edit user event
    componentRef.instance.editUser.subscribe((res: InterestForm) => {
      this.editUser.emit({interestForm: res, id: this.userId});
    })
  }

  public ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.unsubscribe();
  }

}

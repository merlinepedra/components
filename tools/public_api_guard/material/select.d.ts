export declare const MAT_SELECT_CONFIG: InjectionToken<MatSelectConfig>;

export declare const MAT_SELECT_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;

export declare const MAT_SELECT_SCROLL_STRATEGY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY;
};

export declare function MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay): () => ScrollStrategy;

export declare class MatSelect extends _MatSelectMixinBase implements AfterContentInit, OnChanges, OnDestroy, OnInit, DoCheck, ControlValueAccessor, CanDisable, HasTabIndex, MatFormFieldControl<any>, CanUpdateErrorState, CanDisableRipple {
    _ariaDescribedby: string;
    readonly _closedStream: Observable<void>;
    _keyManager: ActiveDescendantKeyManager<MatOption>;
    _offsetY: number;
    _onChange: (value: any) => void;
    _onTouched: () => void;
    readonly _openedStream: Observable<void>;
    _optionIds: string;
    _panelDoneAnimatingStream: Subject<string>;
    _positions: ConnectedPosition[];
    _scrollStrategy: ScrollStrategy;
    _selectionModel: SelectionModel<MatOption>;
    _transformOrigin: string;
    _triggerFontSize: number;
    _triggerRect: ClientRect;
    ariaLabel: string;
    ariaLabelledby: string;
    get compareWith(): (o1: any, o2: any) => boolean;
    set compareWith(fn: (o1: any, o2: any) => boolean);
    controlType: string;
    customTrigger: MatSelectTrigger;
    get disableOptionCentering(): boolean;
    set disableOptionCentering(value: boolean);
    get empty(): boolean;
    errorStateMatcher: ErrorStateMatcher;
    get focused(): boolean;
    get id(): string;
    set id(value: string);
    get multiple(): boolean;
    set multiple(value: boolean);
    ngControl: NgControl;
    readonly openedChange: EventEmitter<boolean>;
    optionGroups: QueryList<MatOptgroup>;
    readonly optionSelectionChanges: Observable<MatOptionSelectionChange>;
    options: QueryList<MatOption>;
    overlayDir: CdkConnectedOverlay;
    panel: ElementRef;
    panelClass: string | string[] | Set<string> | {
        [key: string]: any;
    };
    get panelOpen(): boolean;
    get placeholder(): string;
    set placeholder(value: string);
    get required(): boolean;
    set required(value: boolean);
    get selected(): MatOption | MatOption[];
    readonly selectionChange: EventEmitter<MatSelectChange>;
    get shouldLabelFloat(): boolean;
    sortComparator: (a: MatOption, b: MatOption, options: MatOption[]) => number;
    trigger: ElementRef;
    get triggerValue(): string;
    get typeaheadDebounceInterval(): number;
    set typeaheadDebounceInterval(value: number);
    get value(): any;
    set value(newValue: any);
    readonly valueChange: EventEmitter<any>;
    constructor(_viewportRuler: ViewportRuler, _changeDetectorRef: ChangeDetectorRef, _ngZone: NgZone, _defaultErrorStateMatcher: ErrorStateMatcher, elementRef: ElementRef, _dir: Directionality, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _parentFormField: MatFormField, ngControl: NgControl, tabIndex: string, scrollStrategyFactory: any, _liveAnnouncer: LiveAnnouncer, defaults?: MatSelectConfig);
    _calculateOverlayScroll(selectedIndex: number, scrollBuffer: number, maxScroll: number): number;
    _getAriaActiveDescendant(): string | null;
    _getAriaLabel(): string | null;
    _getAriaLabelledby(): string | null;
    _getPanelTheme(): string;
    _handleKeydown(event: KeyboardEvent): void;
    _isRtl(): boolean;
    _onAttached(): void;
    _onBlur(): void;
    _onFocus(): void;
    close(): void;
    focus(options?: FocusOptions): void;
    ngAfterContentInit(): void;
    ngDoCheck(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onContainerClick(): void;
    open(): void;
    registerOnChange(fn: (value: any) => void): void;
    registerOnTouched(fn: () => {}): void;
    setDescribedByIds(ids: string[]): void;
    setDisabledState(isDisabled: boolean): void;
    toggle(): void;
    writeValue(value: any): void;
    static ngAcceptInputType_disableOptionCentering: BooleanInput;
    static ngAcceptInputType_disableRipple: BooleanInput;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_multiple: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_typeaheadDebounceInterval: NumberInput;
    static ??cmp: i0.????ComponentDefWithMeta<MatSelect, "mat-select", ["matSelect"], { "disabled": "disabled"; "disableRipple": "disableRipple"; "tabIndex": "tabIndex"; "panelClass": "panelClass"; "placeholder": "placeholder"; "required": "required"; "multiple": "multiple"; "disableOptionCentering": "disableOptionCentering"; "compareWith": "compareWith"; "value": "value"; "ariaLabel": "aria-label"; "ariaLabelledby": "aria-labelledby"; "errorStateMatcher": "errorStateMatcher"; "typeaheadDebounceInterval": "typeaheadDebounceInterval"; "sortComparator": "sortComparator"; "id": "id"; }, { "openedChange": "openedChange"; "_openedStream": "opened"; "_closedStream": "closed"; "selectionChange": "selectionChange"; "valueChange": "valueChange"; }, ["customTrigger", "options", "optionGroups"], ["mat-select-trigger", "*"]>;
    static ??fac: i0.????FactoryDef<MatSelect, [null, null, null, null, null, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; }, { optional: true; self: true; }, { attribute: "tabindex"; }, null, null, { optional: true; }]>;
}

export declare const matSelectAnimations: {
    readonly transformPanelWrap: AnimationTriggerMetadata;
    readonly transformPanel: AnimationTriggerMetadata;
};

export declare class MatSelectChange {
    source: MatSelect;
    value: any;
    constructor(
    source: MatSelect,
    value: any);
}

export interface MatSelectConfig {
    disableOptionCentering?: boolean;
    typeaheadDebounceInterval?: number;
}

export declare class MatSelectModule {
    static ??inj: i0.????InjectorDef<MatSelectModule>;
    static ??mod: i0.????NgModuleDefWithMeta<MatSelectModule, [typeof i1.MatSelect, typeof i1.MatSelectTrigger], [typeof i2.CommonModule, typeof i3.OverlayModule, typeof i4.MatOptionModule, typeof i4.MatCommonModule], [typeof i5.CdkScrollableModule, typeof i6.MatFormFieldModule, typeof i1.MatSelect, typeof i1.MatSelectTrigger, typeof i4.MatOptionModule, typeof i4.MatCommonModule]>;
}

export declare class MatSelectTrigger {
    static ??dir: i0.????DirectiveDefWithMeta<MatSelectTrigger, "mat-select-trigger", never, {}, {}, never>;
    static ??fac: i0.????FactoryDef<MatSelectTrigger, never>;
}

export declare const SELECT_ITEM_HEIGHT_EM = 3;

export declare const SELECT_MULTIPLE_PANEL_PADDING_X: number;

export declare const SELECT_PANEL_INDENT_PADDING_X: number;

export declare const SELECT_PANEL_MAX_HEIGHT = 256;

export declare const SELECT_PANEL_PADDING_X = 16;

export declare const SELECT_PANEL_VIEWPORT_PADDING = 8;

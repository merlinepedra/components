export declare function getMatInputUnsupportedTypeError(type: string): Error;

export declare const MAT_INPUT_VALUE_ACCESSOR: InjectionToken<{
    value: any;
}>;

export declare class MatInput extends _MatInputMixinBase implements MatFormFieldControl<any>, OnChanges, OnDestroy, OnInit, DoCheck, CanUpdateErrorState {
    _ariaDescribedby: string;
    protected _disabled: boolean;
    protected _elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
    protected _id: string;
    _isNativeSelect: boolean;
    _isServer: boolean;
    protected _neverEmptyInputTypes: string[];
    protected _platform: Platform;
    protected _previousNativeValue: any;
    protected _required: boolean;
    protected _type: string;
    protected _uid: string;
    autofilled: boolean;
    controlType: string;
    get disabled(): boolean;
    set disabled(value: boolean);
    get empty(): boolean;
    errorStateMatcher: ErrorStateMatcher;
    focused: boolean;
    get id(): string;
    set id(value: string);
    ngControl: NgControl;
    placeholder: string;
    get readonly(): boolean;
    set readonly(value: boolean);
    get required(): boolean;
    set required(value: boolean);
    get shouldLabelFloat(): boolean;
    readonly stateChanges: Subject<void>;
    get type(): string;
    set type(value: string);
    get value(): string;
    set value(value: string);
    constructor(_elementRef: ElementRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>, _platform: Platform,
    ngControl: NgControl, _parentForm: NgForm, _parentFormGroup: FormGroupDirective, _defaultErrorStateMatcher: ErrorStateMatcher, inputValueAccessor: any, _autofillMonitor: AutofillMonitor, ngZone: NgZone);
    protected _dirtyCheckNativeValue(): void;
    _focusChanged(isFocused: boolean): void;
    protected _isBadInput(): boolean;
    protected _isNeverEmpty(): boolean;
    _isTextarea(): boolean;
    _onInput(): void;
    protected _validateType(): void;
    focus(options?: FocusOptions): void;
    ngDoCheck(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    onContainerClick(): void;
    setDescribedByIds(ids: string[]): void;
    static ngAcceptInputType_disabled: BooleanInput;
    static ngAcceptInputType_readonly: BooleanInput;
    static ngAcceptInputType_required: BooleanInput;
    static ngAcceptInputType_value: any;
    static ??dir: i0.????DirectiveDefWithMeta<MatInput, "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", ["matInput"], { "disabled": "disabled"; "id": "id"; "placeholder": "placeholder"; "required": "required"; "type": "type"; "errorStateMatcher": "errorStateMatcher"; "value": "value"; "readonly": "readonly"; }, {}, never>;
    static ??fac: i0.????FactoryDef<MatInput, [null, null, { optional: true; self: true; }, { optional: true; }, { optional: true; }, null, { optional: true; self: true; }, null, null]>;
}

export declare class MatInputModule {
    static ??inj: i0.????InjectorDef<MatInputModule>;
    static ??mod: i0.????NgModuleDefWithMeta<MatInputModule, [typeof i1.MatInput, typeof i2.MatTextareaAutosize], [typeof i3.TextFieldModule, typeof i4.MatFormFieldModule], [typeof i3.TextFieldModule, typeof i4.MatFormFieldModule, typeof i1.MatInput, typeof i2.MatTextareaAutosize]>;
}

export declare class MatTextareaAutosize extends CdkTextareaAutosize {
    get matAutosize(): boolean;
    set matAutosize(value: boolean);
    get matAutosizeMaxRows(): number;
    set matAutosizeMaxRows(value: number);
    get matAutosizeMinRows(): number;
    set matAutosizeMinRows(value: number);
    get matTextareaAutosize(): boolean;
    set matTextareaAutosize(value: boolean);
    static ??dir: i0.????DirectiveDefWithMeta<MatTextareaAutosize, "textarea[mat-autosize], textarea[matTextareaAutosize]", ["matTextareaAutosize"], { "cdkAutosizeMinRows": "cdkAutosizeMinRows"; "cdkAutosizeMaxRows": "cdkAutosizeMaxRows"; "matAutosizeMinRows": "matAutosizeMinRows"; "matAutosizeMaxRows": "matAutosizeMaxRows"; "matAutosize": "mat-autosize"; "matTextareaAutosize": "matTextareaAutosize"; }, {}, never>;
    static ??fac: i0.????FactoryDef<MatTextareaAutosize, never>;
}

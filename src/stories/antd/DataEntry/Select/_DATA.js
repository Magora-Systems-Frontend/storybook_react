export const SelectProps = {
	allowClear: {
		type: 'boolean',
		description: 'Show clear button.'
	},

	autoClearSearchValue: {
		type: 'boolean',
		description: 'Whether the current search will be cleared on selecting an item. Only applies when mode is set to multiple or tags.'
	},

	autoFocus: {
		type: 'boolean',
		description: 'Get focus by default'
	},

	defaultActiveFirstOption: {
		type: 'boolean',
		description: 'Whether active first option by default'
	},

	defaultValue: {
		type: 'string|string[]',
		description: 'Initial selected option.'
	},

	disabled: {
		type: 'boolean',
		description: 'Whether disabled select'
	},

	dropdownClassName: {
		type: 'string',
		description: 'className of dropdown menu'
	},

	dropdownMatchSelectWidth: {
		type: 'boolean',
		description: 'Whether dropdown\'s width is same with select.'
	},

	dropdownRender: {
		type: '	(menuNode: ReactNode, props) => ReactNode',
		description: 'Customize dropdown content'
	},
	dropdownStyle: {
		type: 'object',
		description: 'style of dropdown menu'
	},
	filterOption: {
		type: 'boolean or function(inputValue, option)',
		description: 'If true, filter options by input, if function, filter options against it. The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded.'
	},

	firstActiveValue: {
		type: 'string|string[]',
		description: 'Value of action option by default'
	},

	getPopupContainer: {
		type: 'function(triggerNode)	() => document.body',
		description: 'Parent Node which the selector should be rendered to. Default to body. When position issues happen, try to modify it into scrollable content and position it relative.'
	},

	labelInValue: {
		type: 'boolean',
		description: 'whether to embed label in value, turn the format of value from string to {key: string, label: ReactNode}'
	},
	maxTagCount: {
		type: 'number',
		description: 'Max tag count to show'
	},

	maxTagPlaceholder: {
		type: 'ReactNode/function(omittedValues)',
		description: 'Placeholder for not showing tags'
	},




	mode: {
		type: '\'default\' | \'multiple\' | \'tags\'',
		description: 'Set mode of Select',
	},

	notFoundContent: {
		type: 'string',
		description: 'Specify content to show when no result matches.',
	},
	optionFilterProp: {
		type: 'string',
		description: 'Which prop value of option will be used for filter if filterOption is true',
	},
	optionLabelProp: {
		type: 'string',
		description: 'Which prop value of option will render as content of select.',
	},

	placeholder: {
		type: 'string|ReactNode',
		description: 'Placeholder of select',
	},

	showArrow: {
		type: 'boolean',
		description: 'Whether to show the drop-down arrow',
	},

	showSearch: {
		type: 'boolean',
		description: 'Whether show search input in single mode.',
	},
	size: {
		type: 'string',
		description: 'Size of Select input. default large small',
	},

	suffixIcon: {
		type: 'ReactNode',
		description: 'The custom suffix icon',
	},

	removeIcon: {
		type: 'ReactNode',
		description: 'The custom remove icon',
	},

	clearIcon: {
		type: 'ReactNode',
		description: 'The custom clear icon',
	},

	menuItemSelectedIcon: {
		type: 'ReactNode',
		description: 'The custom menuItemSelected icon',
	},

	tokenSeparators: {
		type: 'string[]',
		description: 'Separator used to tokenize on tag/multiple mode',
	},

	value: {
		type: 'string|number|string[]|number[]',
		description: 'Current selected option.',
	},

	onBlur: {
		type: 'function',
		description: 'Called when blur',
	},

	onChange: {
		type: 'function(value, option:Option/Array<Option>)',
		description: 'Called when select an option or input value change, or value of input is changed in combobox mode',
	},



	onDeselect: {
		type: '	function(value, option:Option)',
		description: 'Called when a option is deselected, the params are option\'s value (or key) . only called for multiple or tags, effective in multiple or tags mode only.',
	},

	onFocus: {
		type: 'function',
		description: 'Called when focus',
	},

	onInputKeyDown: {
		type: 'function',
		description: 'Called when key pressed',
	},
	onMouseEnter: {
		type: 'function',
		description: 'Called when mouse enter',
	},

	onMouseLeave: {
		type: 'function',
		description: 'Called when mouse leave',
	},

	onPopupScroll: {
		type: 'function',
		description: 'Called when dropdown scrolls',
	},

	onSearch: {
		type: 'function(value: string)	',
		description: 'Callback function that is fired when input changed.',
	},

	onSelect: {
		type: 'function(value, option:Option)',
		description: 'Called when a option is selected, the params are option\'s value (or key) and option instance.',
	},

	defaultOpen: {
		type: 'boolean',
		description: 'Initial open state of dropdown',
	},

	open: {
		type: 'boolean',
		description: 'Controlled open state of dropdown',
	},

	onDropdownVisibleChange: {
		type: 'function(open)',
		description: 'Call when dropdown open',
	},

	loading: {
		type: 'boolean',
		description: 'indicate loading state',
	},

}
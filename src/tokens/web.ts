export const extensions = {
    "br.gov.rs.procergs": {
        "formatVersion": "2025.10",
        "web": {
            "recipes": {
                "govrs-color-interactive-link-rgb": {
                    "format": "rgb",
                    "token": "colors.interactive.link"
                },
                "govrs-color-interactive-link-subtle-rgb": {
                    "format": "rgb",
                    "token": "colors.interactive.linkSubtle"
                },
                "govrs-color-text-muted-rgb": {
                    "format": "rgb",
                    "token": "colors.text.muted"
                },
                "govrs-color-text-primary-rgb": {
                    "format": "rgb",
                    "token": "colors.text.primary"
                },
                "govrs-color-text-inverse-rgb": {
                    "format": "rgb",
                    "token": "colors.text.inverse"
                },
                "govrs-color-surface-base-rgb": {
                    "format": "rgb",
                    "token": "colors.surface.base"
                },
                "govrs-color-surface-muted-rgb": {
                    "format": "rgb",
                    "token": "colors.surface.muted"
                },
                "govrs-color-contrast-background-rgb": {
                    "format": "rgb",
                    "token": "colors.contrast.background"
                }
            },
            "highContrast": [
                {
                    "selector": ":root:is(.high-contrast, [data-govrs-contrast='high']),\r\n:is(.high-contrast, [data-govrs-contrast='high'])",
                    "declarations": [
                        {
                            "name": "govrs-color-brand-primary",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-strong",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-hover",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-soft",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-soft-alt",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-alpha-08",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-alpha-10",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-alpha-20",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-alpha-40",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-interactive-link",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-interactive-link-subtle",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-text-primary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-text-secondary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-text-muted",
                            "value": "{colors.contrast.muted}"
                        },
                        {
                            "name": "govrs-color-text-subtle",
                            "value": "{colors.contrast.muted}"
                        },
                        {
                            "name": "govrs-color-text-placeholder",
                            "value": "{colors.contrast.muted}"
                        },
                        {
                            "name": "govrs-color-text-inverse",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-neutral-text-subtle",
                            "value": "{colors.contrast.muted}"
                        },
                        {
                            "name": "govrs-color-surface-base",
                            "value": "{colors.contrast.background}"
                        },
                        {
                            "name": "govrs-color-surface-muted",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-surface-soft",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-surface-raised",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-surface-canvas",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-surface-alt",
                            "value": "{colors.contrast.surfaceAlt}"
                        },
                        {
                            "name": "govrs-color-surface-alt-strong",
                            "value": "{colors.contrast.surfaceAlt}"
                        },
                        {
                            "name": "govrs-color-surface-overlay",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-surface-overlay-strong",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-border-subtle",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-color-border-default",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-color-border-muted",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-color-border-strong",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-color-border-emphasis",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-color-status-success-default",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-status-success-surface",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-status-warning-default",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-status-warning-surface",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-status-error-default",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-status-error-surface",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-status-info-default",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-status-info-surface",
                            "value": "{colors.contrast.surface}"
                        },
                        {
                            "name": "govrs-color-focus",
                            "value": "{colors.contrast.accent}"
                        },
                        {
                            "name": "govrs-shadow-sm",
                            "value": "none"
                        },
                        {
                            "name": "govrs-shadow-card",
                            "value": "none"
                        },
                        {
                            "name": "govrs-shadow-card-hover",
                            "value": "none"
                        },
                        {
                            "name": "govrs-shadow-floating",
                            "value": "none"
                        },
                        {
                            "name": "govrs-shadow-overlay",
                            "value": "none"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-search",
                    "declarations": [
                        {
                            "name": "govrs-search-surface",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-search-surface-hover",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-search-border",
                            "value": "{colors.contrast.fieldBorder}"
                        },
                        {
                            "name": "govrs-search-foreground",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-search-placeholder",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-search-icon",
                            "value": "{colors.contrast.fieldForeground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-header__search-wrapper",
                    "declarations": [
                        {
                            "name": "govrs-header-search-background",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-header-search-border",
                            "value": "{colors.contrast.fieldBorder}"
                        },
                        {
                            "name": "govrs-header-search-mobile-background",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-header-search-mobile-border",
                            "value": "{colors.contrast.fieldBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-header-wrapper",
                    "declarations": [
                        {
                            "name": "govrs-header-title-foreground",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-header-title-hover-foreground",
                            "value": "{colors.contrast.foreground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-button",
                    "declarations": [
                        {
                            "name": "govrs-button-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-button-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-button-border",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-tab",
                    "declarations": [
                        {
                            "name": "govrs-tab-list-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tab-panel-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tab-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-tab-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-tab-active-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-tab-active-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-tab-hover-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-tab-focus",
                            "value": "{colors.contrast.accent}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-notification",
                    "declarations": [
                        {
                            "name": "govrs-notification-panel-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-notification-panel-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-notification-panel-muted",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-notification-panel-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-notification-tabs-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-notification-item-hover",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-notification-item-active",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-notification-item-interaction-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-notification-accent",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-notification-accent-hover",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-notification-new-indicator",
                            "value": "{colors.contrast.accent}"
                        },
                        {
                            "name": "govrs-notification-panel-shadow",
                            "value": "none"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-notification .govrs-tab",
                    "declarations": [
                        {
                            "name": "govrs-tab-list-background",
                            "value": "var(--govrs-notification-tabs-background)"
                        },
                        {
                            "name": "govrs-tab-panel-background",
                            "value": "var(--govrs-notification-panel-background)"
                        },
                        {
                            "name": "govrs-tab-foreground",
                            "value": "var(--govrs-notification-panel-foreground)"
                        },
                        {
                            "name": "govrs-tab-border",
                            "value": "var(--govrs-notification-panel-border)"
                        },
                        {
                            "name": "govrs-tab-active-foreground",
                            "value": "var(--govrs-notification-accent)"
                        },
                        {
                            "name": "govrs-tab-active-border",
                            "value": "var(--govrs-notification-accent)"
                        },
                        {
                            "name": "govrs-tab-hover-foreground",
                            "value": "var(--govrs-notification-accent-hover)"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-select",
                    "declarations": [
                        {
                            "name": "govrs-select-label",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-select-control-background",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-select-control-foreground",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-select-control-border",
                            "value": "{colors.contrast.fieldBorder}"
                        },
                        {
                            "name": "govrs-select-list-background",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-select-list-foreground",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-select-list-border",
                            "value": "{colors.contrast.popoverBorder}"
                        },
                        {
                            "name": "govrs-select-icon",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-select-placeholder",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-select-selected-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-select-selected-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-select-marker-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-select-marker-border",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-accordion",
                    "declarations": [
                        {
                            "name": "govrs-accordion-surface",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-accordion-surface-hover",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-accordion-border",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-accordion-title-color",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-accordion-content-color",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-accordion-filter-surface",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-accordion-filter-border",
                            "value": "{colors.contrast.fieldBorder}"
                        },
                        {
                            "name": "govrs-accordion-filter-icon",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-accordion-empty-surface",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-accordion-empty-border",
                            "value": "{colors.contrast.border}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-tooltip",
                    "declarations": [
                        {
                            "name": "govrs-tooltip-surface",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-tooltip-text",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-tooltip-border",
                            "value": "{colors.contrast.popoverBorder}"
                        },
                        {
                            "name": "govrs-tooltip-trigger-color",
                            "value": "{colors.contrast.icon}"
                        },
                        {
                            "name": "govrs-tooltip-trigger-surface",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tooltip-success-surface",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-tooltip-success-text",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-tooltip-error-surface",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-tooltip-error-text",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-tooltip-warning-surface",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-tooltip-warning-text",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-tooltip-info-surface",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-tooltip-info-text",
                            "value": "{colors.contrast.popoverForeground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-modal",
                    "declarations": [
                        {
                            "name": "govrs-color-surface-base",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-color-surface-alt",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-color-text-primary",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-color-text-secondary",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-color-text-placeholder",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-color-border-emphasis",
                            "value": "{colors.contrast.popoverBorder}"
                        },
                        {
                            "name": "govrs-modal-dialog-background",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-modal-dialog-foreground",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-modal-dialog-border",
                            "value": "{colors.contrast.popoverBorder}"
                        },
                        {
                            "name": "govrs-modal-action-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-modal-action-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-modal-action-border",
                            "value": "{colors.contrast.controlBackground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-date-picker",
                    "declarations": [
                        {
                            "name": "govrs-date-picker-trigger-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-date-picker-trigger-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-date-picker-trigger-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-date-picker-trigger-icon",
                            "value": "{colors.contrast.icon}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-tag",
                    "declarations": [
                        {
                            "name": "govrs-tag-interactive-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tag-selected-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tag-text-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tag-icon-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-tag-score-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-color-text-inverse",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-color-surface-base",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) input[type='checkbox'].govrs-checkbox",
                    "declarations": [
                        {
                            "name": "govrs-checkbox-mark",
                            "value": "{colors.contrast.mark}"
                        },
                        {
                            "name": "govrs-checkbox-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-checkbox-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-checkbox-active-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-checkbox-indeterminate-background",
                            "value": "{colors.contrast.controlBackground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) input[type='radio'].govrs-radio",
                    "declarations": [
                        {
                            "name": "govrs-radio-active-color",
                            "value": "{colors.contrast.mark}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high'])\r\n  input[type='checkbox'][role='switch'].govrs-switch",
                    "declarations": [
                        {
                            "name": "govrs-switch-track-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-switch-track-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-switch-thumb-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-switch-thumb-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-switch-checked-track-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-switch-checked-thumb-background",
                            "value": "{colors.contrast.controlBackground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-upload",
                    "declarations": [
                        {
                            "name": "govrs-upload-trigger-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-upload-trigger-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-upload-trigger-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-upload-trigger-hover-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-upload-item-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-upload-item-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-upload-item-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-upload-disabled-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-upload-disabled-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-upload-disabled-border",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-slider",
                    "declarations": [
                        {
                            "name": "govrs-slider-label-color",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-slider-input-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-slider-input-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-slider-input-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-slider-rail-color",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-slider-range-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-slider-thumb-background",
                            "value": "{colors.contrast.mark}"
                        },
                        {
                            "name": "govrs-slider-thumb-border",
                            "value": "{colors.contrast.controlBackground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-step-horizontal,\r\n:is(.high-contrast, [data-govrs-contrast='high']) .govrs-step-vertical",
                    "declarations": [
                        {
                            "name": "govrs-color-brand-primary",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-step-active-background",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-step-active-foreground",
                            "value": "{colors.contrast.popoverForeground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-loader",
                    "declarations": [
                        {
                            "name": "govrs-loader-color",
                            "value": "{colors.contrast.mark}"
                        },
                        {
                            "name": "govrs-loader-track-color",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-loader-label-color",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-loader-progress-color",
                            "value": "{colors.contrast.mark}"
                        },
                        {
                            "name": "govrs-loader-progress-center",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-loader-track-outline",
                            "value": "{colors.contrast.border}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-table",
                    "declarations": [
                        {
                            "name": "govrs-table-foreground",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-table-title",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-table-header-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-table-header-cell-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-table-header-foreground",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-table-border",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-table-control-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-table-control-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-table-control-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-table-select-appearance",
                            "value": "auto"
                        },
                        {
                            "name": "govrs-table-select-icon",
                            "value": "none"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-pagination",
                    "declarations": [
                        {
                            "name": "govrs-pagination-foreground",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-pagination-brand",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-pagination-control-background",
                            "value": "{colors.contrast.fieldBackground}"
                        },
                        {
                            "name": "govrs-pagination-control-foreground",
                            "value": "{colors.contrast.fieldForeground}"
                        },
                        {
                            "name": "govrs-pagination-control-border",
                            "value": "{colors.contrast.fieldBorder}"
                        },
                        {
                            "name": "govrs-pagination-select-appearance",
                            "value": "auto"
                        },
                        {
                            "name": "govrs-pagination-select-icon",
                            "value": "none"
                        },
                        {
                            "name": "govrs-pagination-page-default-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-pagination-page-default-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-pagination-page-default-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-pagination-page-active-background",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-pagination-page-active-foreground",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-pagination-page-active-border",
                            "value": "{colors.contrast.controlBorder}"
                        },
                        {
                            "name": "govrs-pagination-page-hover-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-pagination-page-hover-border",
                            "value": "{colors.contrast.accent}"
                        },
                        {
                            "name": "govrs-pagination-page-pressed-background",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-pagination-page-pressed-foreground",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-pagination-page-pressed-border",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-breadcrumbs",
                    "declarations": [
                        {
                            "name": "govrs-breadcrumbs-link",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-breadcrumbs-link-hover",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-breadcrumbs-current",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-breadcrumbs-separator",
                            "value": "{colors.contrast.muted}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-list-link",
                    "declarations": [
                        {
                            "name": "govrs-list-link-border",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-list-link-number",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-list-link-icon",
                            "value": "{colors.contrast.icon}"
                        },
                        {
                            "name": "govrs-list-link-meta",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-list-link-anchor",
                            "value": "{colors.contrast.foreground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-card",
                    "declarations": [
                        {
                            "name": "govrs-card-border",
                            "value": "{colors.contrast.border}"
                        },
                        {
                            "name": "govrs-color-brand-primary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-hover",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-text-subtle",
                            "value": "{colors.contrast.muted}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-list-default",
                    "declarations": [
                        {
                            "name": "govrs-color-brand-primary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-hover",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-text-subtle",
                            "value": "{colors.contrast.muted}"
                        },
                        {
                            "name": "govrs-color-neutral-text-subtle",
                            "value": "{colors.contrast.muted}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high'])\r\n  :where(.carousel-slide-panel-link, .carousel-button, .carousel-indicator)",
                    "declarations": [
                        {
                            "name": "govrs-color-brand-primary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-strong",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-brand-primary-hover",
                            "value": "{colors.contrast.foreground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-alert",
                    "declarations": [
                        {
                            "name": "govrs-alert-border",
                            "value": "{colors.contrast.border}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-badge",
                    "declarations": [
                        {
                            "name": "govrs-badge-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-badge-foreground",
                            "value": "{colors.contrast.controlForeground}"
                        },
                        {
                            "name": "govrs-badge-border",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-menu-hamburger",
                    "declarations": [
                        {
                            "name": "govrs-menu-hamburger-toggle-background",
                            "value": "{colors.contrast.controlBackground}"
                        },
                        {
                            "name": "govrs-menu-hamburger-toggle-border",
                            "value": "transparent"
                        },
                        {
                            "name": "govrs-menu-hamburger-toggle-foreground",
                            "value": "{colors.contrast.icon}"
                        },
                        {
                            "name": "govrs-color-text-primary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-text-subtle",
                            "value": "{colors.contrast.icon}"
                        },
                        {
                            "name": "govrs-color-text-inverse",
                            "value": "{colors.contrast.foreground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .acess-bar",
                    "declarations": [
                        {
                            "name": "govrs-acess-bar-foreground",
                            "value": "{colors.contrast.icon}"
                        },
                        {
                            "name": "govrs-acess-bar-hover-foreground",
                            "value": "{colors.contrast.icon}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-date-picker__date-panel,\r\n:is(.high-contrast, [data-govrs-contrast='high']) .govrs-date-picker__time-panel,\r\n:is(.high-contrast, [data-govrs-contrast='high']) .govrs-date-picker__datetime-panel,\r\n:where(body:has(.high-contrast), body:has([data-govrs-contrast='high']))\r\n  :where(\r\n    .govrs-date-picker__date-panel,\r\n    .govrs-date-picker__time-panel,\r\n    .govrs-date-picker__datetime-panel\r\n  )",
                    "declarations": [
                        {
                            "name": "govrs-date-picker-panel-background",
                            "value": "{colors.contrast.popoverBackground}"
                        },
                        {
                            "name": "govrs-date-picker-panel-foreground",
                            "value": "{colors.contrast.popoverForeground}"
                        },
                        {
                            "name": "govrs-date-picker-panel-border",
                            "value": "{colors.contrast.popoverBorder}"
                        },
                        {
                            "name": "govrs-date-picker-panel-icon",
                            "value": "{colors.contrast.popoverForeground}"
                        }
                    ]
                },
                {
                    "selector": ":is(.high-contrast, [data-govrs-contrast='high']) .govrs-tag-status",
                    "declarations": [
                        {
                            "name": "govrs-color-status-success-default",
                            "value": "{colors.contrast.mark}"
                        },
                        {
                            "name": "govrs-color-text-secondary",
                            "value": "{colors.contrast.foreground}"
                        },
                        {
                            "name": "govrs-color-surface-base",
                            "value": "{colors.contrast.controlBorder}"
                        }
                    ]
                }
            ]
        }
    }
};

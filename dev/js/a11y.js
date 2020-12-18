export default class ariaHelper {
    constructor(config) {
        this.config = {
            ...{
                autoload: true,
                dataNames: {
                    ariaControlsElSelector: 'aria-controls',
                    modalCloseSelector: 'data-modal-close',
                    modalOpener: 'data-modal-open',
                    preventScrollingOnBackground:
                        'data-modal-prevent-scrolling',
                    modalOnopenCloseGroup: 'data-modal-onopen-closegroup',
                },
            },
            ...config,
        }

        this.data = {
            ariaHistory: [],
            watchModalTabsOptions: null,
            interactionEls: {},
            eventlistenerPreventCache: [],
        }

        if (!this.config.autoload) return

        this.load()
    }

    load() {
        this.watchModalOnopenCloseGroup()
        this.watchAriaControlsToggle()
        this.watchAriaHistoryEl()
        this.watchModalClose()
        this.watchTabsOnlyInActiveModalAllowed()
        this.exitOnEsc()
        this.showTabsFocus()
        this.preventScrollingOnBackground()
    }

    reload() {
        this.load()
    }

    getSlave(el) {
        let ariaSlaveEl = el.getAttribute('aria-controls')

        return document.getElementById(ariaSlaveEl)
    }

    getStatus(el) {
        return JSON.parse(el.getAttribute('aria-expanded'))
    }

    setStatus(el, mode) {
        if (!el.hasAttribute('data-aria-expanded-freeze')) {
            el.setAttribute('aria-expanded', mode)
        }
    }

    watchAriaHistoryEl() {
        const historyEls = document.querySelectorAll(
            '[' + this.config.dataNames.ariaControlsElSelector + ']'
        )

        if (!historyEls) return

        historyEls.forEach((el, i) => {
            if (this.checkIfEventListenerSetted(el, 'watchAriaHistoryEl'))
                return
            el.addEventListener('click', (e) => {
                this.data.ariaHistory.push(el)
            })
        })
    }

    getPreviousHistoryEl(pos) {
        if (!pos) pos = -1

        return this.data.ariaHistory[this.data.ariaHistory.length + pos]
    }

    setPreviousHistoryElFocus() {
        let el = this.getPreviousHistoryEl(-1)

        if (!el) return

        el.focus()

        this.data.ariaHistory.splice(-1, 1)
    }

    watchModalClose() {
        let els = document.querySelectorAll(
            '[' + this.config.dataNames.modalCloseSelector + ']'
        )

        if (!els) return

        els.forEach((el, i) => {
            if (this.checkIfEventListenerSetted(el, 'watchModalClose')) return
            el.addEventListener('click', (e) => {
                this.watchModalTabsOptions = null
                this.setPreviousHistoryElFocus()
            })
        })
    }

    closeModal(el) {
        if (!el) return

        let slave = el.getAttribute('aria-controls'),
            elSlave = document.getElementById(slave)

        el.setAttribute('aria-expanded', false)
        elSlave.hidden = true
        this.watchModalTabsOptions = null
    }

    exitOnEsc() {
        document.addEventListener('keydown', (e) => {
            if (e.key == 'Escape') {
                let el = this.getPreviousHistoryEl(),
                    elBefore = this.getPreviousHistoryEl(-2)
                if (el) {
                    this.closeModal(el)
                    this.setPreviousHistoryElFocus()
                    if (
                        el.hasAttribute(
                            this.config.dataNames.preventScrollingOnBackground
                        )
                    ) {
                        this.setBodyScrollState(false)
                    }
                    if (
                        elBefore &&
                        elBefore.hasAttribute(this.config.dataNames.modalOpener)
                    ) {
                        this.setOptionsForTabsOnlyInActiveModalAllowed(elBefore)
                    }
                }
            }
        })
    }

    setOptionsForTabsOnlyInActiveModalAllowed(el) {
        let ariaControls = el.getAttribute('aria-controls'),
            ariaControlsEl = document.getElementById(ariaControls),
            ariaControlsElFirstFocusableEl = ariaControlsEl.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )

        this.watchModalTabsOptions = {
            parent: ariaControlsEl,
            focusTo: ariaControlsElFirstFocusableEl[0],
        }
    }

    watchTabsOnlyInActiveModalAllowed() {
        const els = document.querySelectorAll(
            '[' + this.config.dataNames.modalOpener + ']'
        )

        if (!els) return

        els.forEach((el, i) => {
            if (
                this.checkIfEventListenerSetted(
                    el,
                    'watchTabsOnlyInActiveModalAllowed'
                )
            )
                return
            el.addEventListener('click', (e) => {
                this.setOptionsForTabsOnlyInActiveModalAllowed(el)
                setTimeout(() => {
                    this.watchModalTabsOptions.focusTo.focus()
                }, 100)
            })
        })

        document.body.addEventListener(
            'focus',
            (e) => {
                let options = this.watchModalTabsOptions
                if (!options) return
                if (
                    !options.parent.hidden &&
                    !options.parent.contains(e.target)
                ) {
                    e.stopPropagation()
                    options.focusTo.focus()
                }
            },
            true
        )
    }

    ariaControlsToggle(el) {
        if (!el) return

        let slaveName = el.getAttribute('aria-controls'),
            slaveEl = this.getSlave(el),
            slaveStatus = this.getStatus(el),
            connectedAriaControlsEls = document.querySelectorAll(
                '[aria-controls="' + slaveName + '"]'
            )

        connectedAriaControlsEls.forEach((el, i) => {
            this.setStatus(el, !slaveStatus)
        })

        slaveEl.hidden = slaveStatus

        if (!slaveStatus) return

        this.setPreviousHistoryElFocus()
    }

    watchAriaControlsToggle() {
        let els = document.querySelectorAll(
            '[' + this.config.dataNames.ariaControlsElSelector + ']'
        )

        if (!els) return

        els.forEach((el, i) => {
            if (this.checkIfEventListenerSetted(el, 'watchAriaControlsToggle'))
                return
            el.addEventListener('click', (e) => {
                this.ariaControlsToggle(el)
            })
        })
    }

    showTabsFocus() {
        document.addEventListener('keyup', (e) => {
            if (e.which === 9) {
                document.documentElement.classList.add('focus-outline')
            }
        })
    }

    watchModalOnopenCloseGroup() {
        let els = document.querySelectorAll(
            '[' + this.config.dataNames.modalOnopenCloseGroup + ']'
        )

        if (!els) return

        els.forEach((el, i) => {
            if (
                this.checkIfEventListenerSetted(
                    el,
                    'watchModalOnopenCloseGroup'
                )
            )
                return
            el.addEventListener('click', (e) => {
                let groupName = el.getAttribute(
                        this.config.dataNames.modalOnopenCloseGroup
                    ),
                    groupConnectedEls = document.querySelectorAll(
                        '[' +
                            this.config.dataNames.modalOnopenCloseGroup +
                            '="' +
                            groupName +
                            '"]'
                    )

                groupConnectedEls.forEach((groupConnectedEl, i) => {
                    let isExpanded = this.getStatus(groupConnectedEl)

                    if (!isExpanded || groupConnectedEl == el) return

                    this.closeModal(groupConnectedEl)
                })
            })
        })
    }

    setBodyScrollState(bodyScrollState) {
        if (bodyScrollState == null) {
            bodyScrollState = JSON.parse(
                document.body.getAttribute('data-scrolling')
            )
        }

        document.body.setAttribute('data-scrolling', !bodyScrollState)
    }

    preventScrollingOnBackground() {
        let els = document.querySelectorAll(
            '[' + this.config.dataNames.preventScrollingOnBackground + ']'
        )

        if (!els) return

        els.forEach((el, i) => {
            if (
                this.checkIfEventListenerSetted(
                    el,
                    'preventScrollingOnBackground'
                )
            )
                return
            el.addEventListener('click', (e) => {
                this.setBodyScrollState()
            })
        })
    }

    checkIfEventListenerSetted(el, cacheKey) {
        if (!this.data.eventlistenerPreventCache[cacheKey]) {
            this.data.eventlistenerPreventCache[cacheKey] = []
        }

        if (!this.data.eventlistenerPreventCache[cacheKey].includes(el)) {
            this.data.eventlistenerPreventCache[cacheKey].push(el)
            return false
        }

        return true
    }
}

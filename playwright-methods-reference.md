# Complete Playwright Methods Reference

## Test Functions (from @playwright/test)

### Core Test Functions
- `test(title, fn)` - Define a test case
- `test.describe(title, fn)` - Group related tests
- `test.beforeAll(fn)` - Run before all tests in the group
- `test.afterAll(fn)` - Run after all tests in the group
- `test.beforeEach(fn)` - Run before each test
- `test.afterEach(fn)` - Run after each test
- `test.skip()` - Skip a test
- `test.fixme()` - Mark test as broken
- `test.only()` - Run only this test
- `test.setTimeout(timeout)` - Set test timeout
- `test.slow()` - Mark test as slow

## Page Methods

### Navigation
- `page.goto(url, options)` - Navigate to a URL
- `page.reload(options)` - Reload the page
- `page.goBack(options)` - Go back in history
- `page.goForward(options)` - Go forward in history

### Page Information
- `page.title()` - Get page title
- `page.url()` - Get current URL
- `page.content()` - Get full HTML content
- `page.viewportSize()` - Get viewport size
- `page.screenshot(options)` - Take screenshot

### Locator Methods (Getting Elements)
- `page.locator(selector)` - Locate element by CSS/XPath selector
- `page.getByRole(role, options)` - Locate by accessibility role
- `page.getByText(text, options)` - Locate by text content
- `page.getByLabel(text, options)` - Locate form control by label
- `page.getByPlaceholder(text, options)` - Locate by placeholder text
- `page.getByAltText(text, options)` - Locate by alt text (images)
- `page.getByTitle(text, options)` - Locate by title attribute
- `page.getByTestId(testId)` - Locate by test ID
- `page.frameLocator(selector)` - Locate frames

### Actions on Locators
- `locator.click(options)` - Click element
- `locator.dblclick(options)` - Double click
- `locator.fill(value)` - Fill input field
- `locator.type(text, options)` - Type text (deprecated, use fill)
- `locator.clear()` - Clear input
- `locator.press(key)` - Press keyboard key
- `locator.check()` - Check checkbox/radio
- `locator.uncheck()` - Uncheck checkbox
- `locator.selectOption(values)` - Select dropdown option
- `locator.setChecked(checked)` - Set checkbox state
- `locator.hover(options)` - Hover over element
- `locator.focus()` - Focus element
- `locator.dragTo(target)` - Drag and drop
- `locator.screenshot(options)` - Screenshot of element
- `locator.scrollIntoViewIfNeeded()` - Scroll to element

### Locator Query Methods
- `locator.first()` - Get first matching element
- `locator.last()` - Get last matching element
- `locator.nth(index)` - Get element by index
- `locator.count()` - Get count of matching elements
- `locator.all()` - Get all matching elements
- `locator.filter(options)` - Filter locators

### Locator Information Methods
- `locator.textContent()` - Get text content
- `locator.innerText()` - Get inner text
- `locator.innerHTML()` - Get inner HTML
- `locator.attribute(name)` - Get attribute value
- `locator.isVisible()` - Check if visible
- `locator.isHidden()` - Check if hidden
- `locator.isEnabled()` - Check if enabled
- `locator.isDisabled()` - Check if disabled
- `locator.isChecked()` - Check if checked
- `locator.isEditable()` - Check if editable
- `locator.boundingBox()` - Get bounding box
- `locator.allTextContents()` - Get all text contents

### Wait Methods
- `page.waitForLoadState(state)` - Wait for load state
- `page.waitForURL(url, options)` - Wait for URL
- `page.waitForSelector(selector, options)` - Wait for selector
- `page.waitForFunction(fn, options)` - Wait for function
- `locator.waitFor(options)` - Wait for locator

### Dialog Handling
- `page.on('dialog', handler)` - Handle dialogs
- `page.once('dialog', handler)` - Handle dialog once
- `dialog.accept(promptText)` - Accept dialog
- `dialog.dismiss()` - Dismiss dialog
- `dialog.message()` - Get dialog message
- `dialog.type()` - Get dialog type

### Keyboard Methods
- `page.keyboard.press(key)` - Press key
- `page.keyboard.type(text)` - Type text
- `page.keyboard.down(key)` - Key down
- `page.keyboard.up(key)` - Key up
- `page.keyboard.insertText(text)` - Insert text

### Mouse Methods
- `page.mouse.click(x, y, options)` - Click at coordinates
- `page.mouse.dblclick(x, y, options)` - Double click
- `page.mouse.down(options)` - Mouse down
- `page.mouse.up(options)` - Mouse up
- `page.mouse.move(x, y, options)` - Move mouse
- `page.mouse.wheel(deltaX, deltaY)` - Scroll wheel

### Frame Methods
- `page.frame(options)` - Get frame by name/URL
- `page.frames()` - Get all frames
- `frame.evaluate(fn)` - Evaluate in frame
- `frame.locator(selector)` - Locate in frame

### Evaluation Methods
- `page.evaluate(fn, arg)` - Evaluate JavaScript in page
- `page.evaluateHandle(fn, arg)` - Evaluate and return handle
- `page.addInitScript(script)` - Add initialization script

### Network Methods
- `page.route(url, handler)` - Intercept requests
- `page.unroute(url, handler)` - Stop intercepting
- `page.waitForRequest(urlOrPredicate)` - Wait for request
- `page.waitForResponse(urlOrPredicate)` - Wait for response
- `request.url()` - Get request URL
- `request.method()` - Get request method
- `response.status()` - Get response status
- `response.ok()` - Check if response is OK

### Browser Context Methods
- `context.addCookies(cookies)` - Add cookies
- `context.clearCookies()` - Clear cookies
- `context.cookies(urls)` - Get cookies
- `context.grantPermissions(permissions)` - Grant permissions
- `context.clearPermissions()` - Clear permissions
- `context.setGeolocation(geolocation)` - Set geolocation
- `context.setExtraHTTPHeaders(headers)` - Set headers
- `context.route(url, handler)` - Intercept at context level
- `context.storageState()` - Get storage state
- `context.close()` - Close context

### Event Handling
- `page.on(event, handler)` - Add event listener
- `page.once(event, handler)` - Listen once
- `page.off(event, handler)` - Remove listener
- Events: 'close', 'console', 'dialog', 'domcontentloaded', 'download', 'filechooser', 'framenavigated', 'load', 'pageerror', 'popup', 'request', 'response', 'websocket', 'worker'

## Expect/Assertion Methods

### Page Assertions
- `expect(page).toHaveTitle(title, options)` - Assert page title
- `expect(page).toHaveURL(url, options)` - Assert page URL
- `expect(page).toHaveScreenshot(name, options)` - Assert screenshot

### Locator Assertions
- `expect(locator).toBeVisible(options)` - Assert visible
- `expect(locator).toBeHidden(options)` - Assert hidden
- `expect(locator).toBeEnabled(options)` - Assert enabled
- `expect(locator).toBeDisabled(options)` - Assert disabled
- `expect(locator).toBeEditable(options)` - Assert editable
- `expect(locator).toBeChecked(options)` - Assert checked
- `expect(locator).toBeFocused(options)` - Assert focused
- `expect(locator).toHaveText(expected, options)` - Assert text
- `expect(locator).toContainText(expected, options)` - Assert contains text
- `expect(locator).toHaveValue(value, options)` - Assert value
- `expect(locator).toHaveAttribute(name, value, options)` - Assert attribute
- `expect(locator).toHaveClass(expected, options)` - Assert class
- `expect(locator).toHaveCount(count)` - Assert count
- `expect(locator).toHaveScreenshot(name, options)` - Assert screenshot

### Generic Matchers
- `expect(value).toBe(expected)` - Strict equality
- `expect(value).toEqual(expected)` - Deep equality
- `expect(value).toContain(item)` - Array/string contains
- `expect(value).toBeTruthy()` - Truthy check
- `expect(value).toBeFalsy()` - Falsy check
- `expect(value).toBeGreaterThan(number)` - Greater than
- `expect(value).toBeGreaterThanOrEqual(number)` - Greater or equal
- `expect(value).toBeLessThan(number)` - Less than
- `expect(value).toBeLessThanOrEqual(number)` - Less or equal
- `expect(value).toMatch(regexp)` - Regex match
- `expect(value).toThrow(error)` - Throw error

## API Methods

### API Request Context
- `request.get(url, options)` - GET request
- `request.post(url, options)` - POST request
- `request.put(url, options)` - PUT request
- `request.patch(url, options)` - PATCH request
- `request.delete(url, options)` - DELETE request
- `request.head(url, options)` - HEAD request
- `request.fetch(url, options)` - Fetch request

### Response Methods
- `response.status()` - Get status code
- `response.statusText()` - Get status text
- `response.ok()` - Check if OK
- `response.url()` - Get response URL
- `response.headers()` - Get headers
- `response.header(name)` - Get header value
- `response.body()` - Get response body
- `response.text()` - Get text body
- `response.json()` - Get JSON body

## Methods Used in mytest.spec.ts

1. **`test()`** - Test function definition
2. **`page.goto()`** - Navigate to URL
3. **`page.title()`** - Get page title
4. **`expect()`** - Assertion function
5. **`toHaveTitle()`** - Assert title matcher


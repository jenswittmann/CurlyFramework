---
# layout: 'layouts/docs.html'
page: guides.ui
isguide: true
---

<p class="h3">
  Basscss can be used to create many different user interface elements out of the box.
  With utility styles and a thoughtfully-architected templating system,
  you can keep CSS bloat to a minimum, while making iterative design changes to partials and components.
  You don’t need to make CSS do your templating engine’s job.
</p>

Note: this guide makes use of optional modules that are not included in the core Basscss package:
<a href="/docs/modules/basscss-ui-utility-button-sizes">UI Utility Button Sizes</a>,
<a href="/docs/modules/basscss-ui-utility-groups">UI Utility Groups</a>, and
<a href="/docs/modules/basscss-button-nav-tab">Button Nav Tab</a>.


# Button Sizes
Button font sizes can be adjusted with font size utilities.

```html
<button type="button" class="h3 button-blue">Burgers</button>
<button type="button" class="h4 button-blue">Fries</button>
<button type="button" class="h6 button-blue">Shakes</button>
```

To change the line-height and padding but leave the font-size the same,
use button size extensions.
Font size utilities and button size extensions can be combined for more options.

```html
<button type="button" class="button-big button-blue">Burgers</button>
<button type="button" class="button-blue">Fries</button>
<div class="mb1 md-hide"></div>
<button type="button" class="button-narrow button-blue">Onion Rings</button>
<button type="button" class="button-small button-blue">Shakes</button>
```


# Navigation

In HTML, navigation is essentially just groups of links.
By using the same styles as buttons,
you can ensure that navigation links are evenly spaced and have large, easy-to-hit targets.
Negative margin utilities can help line up text elements with other elements on the page.
The `.button-nav-light` color style can be used for navigation
items on light backgrounds. Use `.button-nav-dark` for dark backgrounds.

```html
<div class="mxn1">
  <a href="#!" class="button button-narrow button-nav-light">Burgers</a>
  <a href="#!" class="button button-narrow button-nav-light">Fries</a>
  <a href="#!" class="button button-narrow button-nav-light">Shakes</a>
  <a href="#!" class="button button-narrow button-nav-light">Onion Rings</a>
</div>
```

The table object can be used to create justified navigation.
Be sure to test your specific navigation across a range of devices to ensure that 
labels fit within the viewport.

```html
<div class="sm-table table-fixed center nowrap">
  <div class="sm-table-cell">
    <a href="#!" class="button block button-nav-light">Burgers</a>
  </div>
  <div class="sm-table-cell">
    <a href="#!" class="button block button-nav-light">Fries</a>
  </div>
  <div class="sm-table-cell">
    <a href="#!" class="button block button-nav-light">Shakes</a>
  </div>
  <div class="sm-table-cell">
    <a href="#!" class="button block button-nav-light">Onion Rings</a>
  </div>
</div>
```
To stack navigation elements, use the `.block` utility.

```html
<div class="sm-col-6 mxn2">
  <a href="#!" class="button block button-nav-light">Burgers</a>
  <a href="#!" class="button block button-nav-light">Fries</a>
  <a href="#!" class="button block button-nav-light">Shakes</a>
  <a href="#!" class="button block button-nav-light">Onion Rings</a>
</div>
```

Use the `.button-nav-tab` color style to create tabbed navigation.
This only works horizontally, so ensure your navigation fits within narrow viewports.

```html
<div class="clearfix border-bottom">
  <a href="#!" class="left button button-nav-tab is-active">Burgers</a>
  <a href="#!" class="left button button-nav-tab">Fries</a>
  <a href="#!" class="left button button-nav-tab">Shakes</a>
</div>
```

Use the table object to justify tabbed navigation.

```html
<div class="table table-fixed center">
  <a href="#!" class="table-cell button button-narrow button-nav-tab is-active">Burgers</a>
  <a href="#!" class="table-cell button button-narrow button-nav-tab">Fries</a>
  <a href="#!" class="table-cell button button-narrow button-nav-tab">Shakes</a>
</div>
```

Standard color styles can be applied to create a variety of navigation styles.

```html
<div class="sm-col-6 bg-white border rounded">
  <a href="#!" class="button block button-nav-light border-bottom dark-gray">Burgers</a>
  <a href="#!" class="button block button-nav-light border-bottom">Fries</a>
  <a href="#!" class="button block button-nav-light border-bottom">Shakes</a>
  <a href="#!" class="button block button-nav-light">Onion Rings</a>
</div>
```

The `.button-blue` style can be used to create a pill navigation.

```html
<div>
  <a href="#!" class="button button-blue">Burgers</a>
  <a href="#!" class="button button-nav-light">Fries</a>
  <a href="#!" class="button button-nav-light">Shakes</a>
  <a href="#!" class="button button-nav-light">Onion Rings</a>
</div>
```

If you’d like to wrap your navigation in a `ul` use the `.list-reset`
style to remove bullets and padding.

```html
<ul class="list-reset mxn1 mb0">
  <li class="inline-block">
    <a href="#!" class="button button-narrow button-nav-light">Burgers</a>
  </li>
  <li class="inline-block">
    <a href="#!" class="button button-narrow button-nav-light">Fries</a>
  </li>
  <li class="inline-block">
    <a href="#!" class="button button-narrow button-nav-light">Shakes</a>
  </li>
  <li class="inline-block">
    <a href="#!" class="button button-narrow button-nav-light">Onion Rings</a>
  </li>
</ul>
```


# Breadcrumbs

Breadcrumbs are a common and well-understood wayfinding pattern used in multi-level hierarchies.
Stylistically, these are essentially the same as navigation, but with separators between items.


```html
<div class="mxn1">
  <a href="#!" class="button button-narrow">Home</a> /
  <a href="#!" class="button button-narrow">Hot Dogs</a> /
  <span class="button button-narrow">Frank</span>
</div>
```

```html
<div class="mxn1 mid-gray">
  <a href="#!" class="button button-narrow">Home</a>
  <svg class="icon" data-icon="chevron-right"></svg>
  <a href="#!" class="button button-narrow">Hot Dogs</a>
  <svg class="icon" data-icon="chevron-right"></svg>
  <span class="button button-narrow">Frank</span>
</div>
```

<p class="h5">
  Note: the icons used in this example are from
  <a href="http://jxnblk.github.io/geomicons-open">Geomicons Open</a>.
</p>


# Pagination

Pagination is used to split up large lists in a user-friendly way and allows for deep linking.
Use a combination of layout utilities and button styles to create navigation that suites your design.

```html
<div class="clearfix">
  <a href="#!" class="left button button-nav-light">
    <svg class="icon" data-icon="chevron-left"></svg>
    Previous
  </a>
  <a href="#!" class="right button button-nav-light">
    Next
    <svg class="icon" data-icon="chevron-right"></svg>
  </a>
</div>
```

Responsive state utilities can be used to progressively enhance pagination
with numbers on devices with wider viewports.

```html
<div class="clearfix">
  <a href="#!" class="left button button-narrow button-nav-light">
    <svg class="icon" data-icon="chevron-left"></svg>
    Previous
  </a>
  <a href="#!" class="right button button-narrow button-nav-light">
    Next
    <svg class="icon" data-icon="chevron-right"></svg>
  </a>
  <div class="overflow-hidden sm-show center">
    <a href="#!" class="button button-narrow button-nav-light is-active">1</a>
    <a href="#!" class="button button-narrow button-nav-light">2</a>
    <a href="#!" class="button button-narrow button-nav-light">3</a>
    <a href="#!" class="button button-narrow button-nav-light">4</a>
    <a href="#!" class="button button-narrow button-nav-light">5</a>
  </div>
</div>
```

Standard color styles can be used to control the appearance.

```html
<div class="center">
  <div class="inline-block overflow-hidden border rounded">
    <a href="#!" class="left button button-nav-light border-right">
      <svg class="icon" data-icon="chevron-left"></svg>
      Previous
    </a>
    <a href="#!" class="right button button-nav-light ">
      Next
      <svg class="icon" data-icon="chevron-right"></svg>
    </a>
    <div class="overflow-hidden sm-show">
      <a href="#!" class="left button button-nav-light dark-gray border-right">1</a>
      <a href="#!" class="left button button-nav-light border-right">2</a>
      <a href="#!" class="left button button-nav-light border-right">3</a>
    </div>
  </div>
</div>
```


# Button Groups

Button groups allow for more flexibility in establishing gestalt and controlling information density.
Use a combination of layout utilities and color extensions to create button groups.
The utilities `.rounded-left`, `.rounded-right`,
and `.not-rounded` can be used to override button and form field border radii.

```html
<div class="inline-block clearfix">
  <button type="button" class="left button-blue rounded-left is-active">Burgers</button>
  <button type="button" class="left button-blue border-left not-rounded">Fries</button>
  <button type="button" class="left button-blue border-left rounded-right">Shakes</button>
</div>
```

## Justified Button Group
The table object can be used to create justified button groups.

```html
<div class="table table-fixed center">
  <a href="#!" class="table-cell button button-blue rounded-left is-active">Burgers</a>
  <a href="#!" class="table-cell button button-blue border-left not-rounded">Fries</a>
  <a href="#!" class="table-cell button button-blue border-left rounded-right">Shakes</a>
</div>
```

Normally, buttons with borders would double up when placed next to each other.
The `.x-group-item` utility adjusts negative margins and focus states to visually collapse borders.
Functionally, this is similar to how other frameworks handle button and form input groups,
but with more direct control over styling.

```html
<div class="inline-block clearfix">
  <button type="button" class="left button-blue-outline x-group-item rounded-left is-active">Burgers</button>
  <button type="button" class="left button-blue-outline x-group-item not-rounded">Fries</button>
  <button type="button" class="left button-blue-outline x-group-item rounded-right">Shake</button>
</div>
```

Use `.y-group-item` to group elements vertically.

```html
<div class="inline-block">
  <button type="button" class="block full-width button-blue-outline y-group-item rounded-top is-active">Burgers</button>
  <button type="button" class="block full-width button-blue-outline y-group-item not-rounded">Fries</button>
  <button type="button" class="block full-width button-blue-outline y-group-item rounded-bottom">Shake</button>
</div>
```


# Input Groups

Input groups can be created by removing margins, adjusting border radii, and using the group utilities.
The `.hide` utility visually hides labels, while keeping them accessible to screen readers.

```html
<form class="sm-col-6">
  <label class="hide">Pancakes</label>
  <input type="text" class="block full-width mb0 field-light rounded-top y-group-item" placeholder="Pancakes">
  <label class="hide">Making</label>
  <input type="password" class="block full-width mb0 field-light not-rounded y-group-item" placeholder="Making">
  <label class="hide">Bacon</label>
  <input type="text" class="block full-width field-light rounded-bottom y-group-item" placeholder="Bacon">
  <button type="submit" class="button-blue">Pancake</button>
</form>
```

The grid system can be used to control button or input group widths.

```html
<form class="clearfix">
  <label class="hide">Bacon</label>
  <input type="text" class="col col-4 md-col-5 mb0 field-light rounded-left x-group-item" placeholder="Bacon">
  <label class="hide">Pancakes</label>
  <input type="password" class="col col-4 md-col-5 mb0 field-light not-rounded x-group-item" placeholder="Pancakes">
  <button type="submit" class="col col-4 md-col-2 button-blue rounded-right">Pancake</button>
</form>
```


# Dropdowns

Dropdown menus are used to group secondary or sensitive actions
behind a two-step progressive disclosure,
while conserving screen real estate.
Dropdowns can be created with basic positioning utilities.

The wrapping elements uses relative positioning to anchor the dropdown body.
An invisible fixed position element is used as an overlay to dismiss the dropdown.
The dropdown body uses absolute positioning and margin top to align with the trigger element,
without affecting the document flow.
Be sure dropdowns don’t expand beyond the viewport when used near edges or at small screen sizes.

```html
<div class="relative inline-block" data-disclosure>
  <button type="button" class="button-blue">
    Burger &#9662;
  </button>
  <div data-details class="fixed top-0 right-0 bottom-0 left-0"></div>
  <div data-details class="absolute left-0 mt1 nowrap bg-blue rounded animation-fadein">
    <a href="#!" class="button block button-nav-dark">Rare</a>
    <a href="#!" class="button block button-nav-dark">Medium Rare</a>
    <a href="#!" class="button block button-nav-dark">Medium</a>
    <a href="#!" class="button block button-nav-dark">Well Done</a>
  </div>
</div>
```

<p class="h5">
  Note: this example uses a custom JavaScript function for the disclosure mechanism.
  Use a similar function, component, or directive in your own JavaScript to control behavior.
</p>


# Navbars

Navbars are used to visually group global or sub navigation
and to separate actions and navigation from content.
Using a combination of layout utilities and color styles,
you can create a wide range of navbars that are simple to customize and update.

This example uses a double sided media object to create a flexible center with a search input
that stacks at narrow viewport widths.
By applying the `.py2` utility to the link buttons,
they become the height of normal buttons and inputs plus `.py1`.

```html
<div class="clearfix mb2 white bg-dark-gray">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
  </div>
  <div class="right">
    <a href="#!" class="button py2 m0 button-nav-dark">My Account</a>
  </div>
  <div class="clearfix sm-hide"></div>
  <div class="overflow-hidden px2 py1">
    <input type="text" class="mb0 right fit field-dark" placeholder="Search">
  </div>
</div>
```

By using rgba-based color utilities, the color can quickly be changed
using background color utilities.

```html
<div class="clearfix mb2 white bg-blue">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
  </div>
  <div class="right">
    <a href="#!" class="button py2 m0 button-nav-dark">My Account</a>
  </div>
  <div class="clearfix sm-hide"></div>
  <div class="overflow-hidden px2 py1">
    <input type="text" class="mb0 right fit field-dark" placeholder="Search">
  </div>
</div>
<div class="clearfix mb2 white bg-mid-gray">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
  </div>
  <div class="right">
    <a href="#!" class="button py2 m0 button-nav-dark">My Account</a>
  </div>
  <div class="clearfix sm-hide"></div>
  <div class="overflow-hidden px2 py1">
    <input type="text" class="mb0 right fit field-dark" placeholder="Search">
  </div>
</div>
<div class="clearfix mb2 white bg-green">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
  </div>
  <div class="right">
    <a href="#!" class="button py2 m0 button-nav-dark">My Account</a>
  </div>
  <div class="clearfix sm-hide"></div>
  <div class="overflow-hidden px2 py1">
    <input type="text" class="mb0 right fit field-dark" placeholder="Search">
  </div>
</div>
<div class="clearfix mb2 white bg-red">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
  </div>
  <div class="right">
    <a href="#!" class="button py2 m0 button-nav-dark">My Account</a>
  </div>
  <div class="clearfix sm-hide"></div>
  <div class="overflow-hidden px2 py1">
    <input type="text" class="mb0 right fit field-dark" placeholder="Search">
  </div>
</div>
```

Because Basscss is built with inter-operable styles,
things like a user account dropdown can be added anywhere in the navbar.

```html
<div class="clearfix white bg-dark-gray">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
  </div>
  <div class="right">
    <div id="account-menu" class="inline-block" data-disclosure>
      <div data-details class="fixed top-0 right-0 bottom-0 left-0"></div>
      <div class="relative">
        <a href="#!" class="button py2 m0 button-nav-dark">My Account &#9662;</a>
        <div data-details class="absolute right-0 nowrap bg-white rounded" style="min-width:128px">
          <ul class="h5 list-reset mb0">
            <li><a href="#!" class="button block button-nav-light">Profile</a></li>
            <li><a href="#!" class="button block button-nav-light">Settings</a></li>
            <li><a href="#!" class="button block button-nav-light">Sign Out</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="clearfix sm-hide"></div>
  <div class="overflow-hidden px2">
  </div>
</div>
```

More complex
[Priority Plus](http://bradfrostweb.com/blog/web/complex-navigation-patterns-for-responsive-design/#priority-plus)
navigations can also be created using responsive utilities.

```html
<div class="relative clearfix white bg-dark-gray">
  <div class="left">
    <a href="#!" class="button py2 m0 button-nav-dark">Burgers</a>
  </div>
  <div class="left md-show">
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Hot Dogs</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Fries</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Shakes</a>
    <a href="#!" class="button button-narrow py2 m0 button-nav-dark">Onion Rings</a>
  </div>
  <div class="right">
    <div id="account-menu" class="inline-block" data-disclosure>
      <div data-details class="fixed top-0 right-0 bottom-0 left-0"></div>
      <a href="#!" class="button py2 m0 button-nav-dark">
        <span class="md-hide">Menu &#9662;</span>
        <span class="md-show">More &#9662;</span>
      </a>
      <div data-details class="absolute right-0 xs-left-0 sm-col-6 md-col-4 lg-col-3 nowrap bg-mid-gray rounded-bottom animation-fadein">
        <ul class="h5 list-reset py1 mb0">
          <li class="md-hide"><a href="#!" class="button block button-nav-dark">Hot Dogs</a></li>
          <li class="md-hide"><a href="#!" class="button block button-nav-dark">Fries</a></li>
          <li class="md-hide"><a href="#!" class="button block button-nav-dark">Shakes</a></li>
          <li class="md-hide"><a href="#!" class="button block button-nav-dark">Onion Rings</a></li>
          <li><a href="#!" class="button block button-nav-dark">Bacon</a></li>
          <li><a href="#!" class="button block button-nav-dark">Pancakes</a></li>
          <li><a href="#!" class="button block button-nav-dark">Sausages</a></li>
          <li><a href="#!" class="button block button-nav-dark">Waffles</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<style>
/* Responsive positioning extension example */
@media (max-width:40em) {
  .xs-left-0 { left: 0 }
}
</style>
```


# Boxes

Boxes are used to group content and collections of application resources.
Use combinations of layout utilities and color styles to create boxes.

```html
<div class="md-col-6">
  <div class="p2 bg-white border rounded">
    <h1 class="h2 mt0">Bacon</h1>
    <p class="mb0">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
  </div>
</div>
```

To create headers and footers, set padding on nested divs then use color styles to control appearance.

```html
<div class="md-col-6">
  <div class="overflow-hidden bg-white border rounded">
    <div class="p2 bg-light-gray">
      <h1 class="h2 m0">Bacon with Header</h1>
    </div>
    <div class="p2">
      <p class="m0">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin.</p>
    </div>
  </div>
</div>
```

```html
<div class="md-col-6">
  <div class="p2 bg-white border rounded">
    <img src="/docs/placeholder.svg" class="mb2" />
    <h1 class="h2 mt0">Bacon with Image</h1>
    <p class="mb0">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison.</p>
  </div>
</div>
```

```html
<div class="md-col-6">
  <div class="overflow-hidden bg-white border rounded">
    <div class="p2 white bg-blue">
      <h1 class="h2 m0">Bacon with Header and Footer</h1>
    </div>
    <div class="p2">
      <p class="m0">Bacon ipsum dolor sit amet chuck prosciutto landjaeger ham hock filet mignon shoulder hamburger pig venison. Ham bacon corned beef, sausage kielbasa flank tongue pig drumstick capicola swine short loin ham hock kevin. Bacon t-bone hamburger turkey capicola rump short loin.</p>
    </div>
    <div class="p2 bg-darken-1">
      <p class="m0 h5">Turkey short loin tenderloin jerky.</p>
    </div>
  </div>
</div>
```


# Flash Messages

Flash messages are used to provide feedback after the user has performed an action.
Create custom flash messages with utilities and color styles.

```html
<div class="bold center p2 mb2 white bg-red rounded">
  Warning! Half-pound burger will be deleted
</div>
<div class="bold center p2 mb2 bg-yellow rounded">
  Onion rings cannot connect to the network
</div>
<div class="bold center p2 white bg-green rounded">
  Fries added to order
</div>
```


# Badges

Badges are used to represent properties and states and
to tease quantities of resources behind navigation links.
Button size extensions can be used in combination with
other utilities and color styles to create badges.

```html
<h1>Hamburger
  <span class="h2 inline-block button-small white bg-red rounded">Fries</span>
</h1>
<h2>Hamburger
  <span class="h3 inline-block button-small white bg-red rounded">Fries</span>
</h2>
<h3>Hamburger
  <span class="h4 inline-block button-small white bg-red rounded">Fries</span>
</h3>
<h4>Hamburger
  <span class="inline-block button-small white bg-red rounded">Fries</span>
</h4>
<h5>Hamburger
  <span class="inline-block button-small white bg-red rounded">Fries</span>
</h5>
<h6>Hamburger
  <span class="inline-block button-small white bg-red rounded">Fries</span>
</h6>
```

Color semantics can be controlled with color styles
to represent different qualities of states.

```html
<div>
  <span class="inline-block button-small white bg-blue rounded">Blue</span>
  <span class="inline-block button-small white bg-red rounded">Red</span>
  <span class="inline-block button-small bg-yellow rounded">Yellow</span>
  <span class="inline-block button-small white bg-green rounded">Green</span>
  <span class="inline-block button-small white bg-mid-gray rounded">Mid Gray</span>
  <span class="inline-block button-small border rounded">Bordered</span>
</div>
```


<script src="http://d2v52k3cl9vedd.cloudfront.net/geomicons/0.2.0/geomicons.min.js"></script>

<script>

  var icons = document.querySelectorAll('[data-icon]');
  Geomicons.inject(icons);

  var Disclosure = function(el, options) {
    el.isActive = false;
    el.details = el.querySelectorAll('[data-details]');
    el.hide = function() {
      for (var i = 0; i < el.details.length; i++) {
        el.details[i].style.display = 'none';
      }
    };
    el.show = function() {
      for (var i = 0; i < el.details.length; i++) {
        el.details[i].style.display = 'block';
      }
    };
    el.toggle = function(e) {
      e.stopPropagation();
      el.isActive = !el.isActive;
      if (el.isActive) {
        el.show();
      } else {
        el.hide();
      }
    }
    el.addEventListener('click', function(e) {
      el.toggle(e);
    });
    el.hide();
    return el;
  };

  var disclosures = document.querySelectorAll('[data-disclosure]');

  for (var i = 0; i < disclosures.length; i++) {
    disclosures[i] = new Disclosure(disclosures[i]);
  }

</script>


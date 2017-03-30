It's time to understand how tables work in HTML. Let's consider this table:

```
table
╔═══════╦═══════╗
║  1.1  ║  1.2  ║
╠═══════╬═══════╣
║  2.1  ║  2.2  ║
╚═══════╩═══════╝
```

This table has 2x2 sizes. We could also say that this table has 2 rows and 2 columns. Let's split this table by rows:

```
table
╔═════════════════╗
║ row1            ║
║┏━━━━━━━┳━━━━━━━┓║
║┃  1.1  ┃  1.2  ┃║
║┗━━━━━━━┻━━━━━━━┛║
╠═════════════════╣
║ row2            ║
║┏━━━━━━━┳━━━━━━━┓║
║┃  2.1  ┃  2.2  ┃║
║┗━━━━━━━┻━━━━━━━┛║
╚═════════════════╝
```

In table above we have table, which consists of two rows and each of those has two cells. Let's split each row by cols:

```
table
╔═════════════════════╗
║ row1                ║
║┏━━━━━━━━━┳━━━━━━━━━┓║
║┃ col1    ┃ col2    ┃║
║┃┌───────┐┃┌───────┐┃║
║┃│  1.1  │┃│  1.2  │┃║
║┃└───────┘┃└───────┘┃║
║┗━━━━━━━━━┻━━━━━━━━━┛║
╠═════════════════════╣
║ row2                ║
║┏━━━━━━━━━┳━━━━━━━━━┓║
║┃ col1    ┃ col2    ┃║
║┃┌───────┐┃┌───────┐┃║
║┃│  2.1  │┃│  2.2  │┃║
║┃└───────┘┃└───────┘┃║
║┗━━━━━━━━━┻━━━━━━━━━┛║
╚═════════════════════╝
```

At this point we have a table, with rows. Each row contains columns and this columns has cells. That's exactly how tables looks in HTML. You creates table with `<table>` tag, rows with `<tr>` (_**t**able **r**ow_) tags and columns with `<td>` (_**t**able **d**ata_) tags. That's how table from previous examples might be represented in HTML:

```
<table>
╔═════════════════════╗
║ <tr>                ║
║┏━━━━━━━━━┳━━━━━━━━━┓║
║┃ <td>    ┃ <td>    ┃║
║┃┌───────┐┃┌───────┐┃║
║┃│  1.1  │┃│  1.2  │┃║
║┃└───────┘┃└───────┘┃║
║┃ </td>   ┃ </td>   ┃║
║┗━━━━━━━━━┻━━━━━━━━━┛║
║ </tr>               ║
╠═════════════════════╣
║ <tr>                ║
║┏━━━━━━━━━┳━━━━━━━━━┓║
║┃ <td>    ┃ <td>    ┃║
║┃┌───────┐┃┌───────┐┃║
║┃│  2.1  │┃│  2.2  │┃║
║┃└───────┘┃└───────┘┃║
║┃ </td>   ┃ </td>   ┃║
║┗━━━━━━━━━┻━━━━━━━━━┛║
║ </tr>               ║
╚═════════════════════╝
</table>
```

And here is the markup for table above:

```html
<table>
  <tr>
    <td>1.1</td>
    <td>1.2</td>
  </tr>
  <tr>
    <td>2.1</td>
    <td>2.2</td>
  </tr>
</table>
```

If you need to add heading row to you table, it's easy with `<th>` (_**t**able **h**ead_) tags. Just create a row with `<th>` cells, like so:

```html
<p>Simple table with header</p>
<table>
  <tr>
    <th>First name</th>    ← table head
    <th>Last name</th>     ← table head
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

Content of `<th>` tags will be displayed as bolder text.

Each of those tags has a lot of special attributes. Read more here:

* [`<table>` Attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/table#Attributes)
* [`<tr>` Attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/tr#Attributes)
* [`<td>` Attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/td#Attributes)
* [`<th>` Attributes](https://developer.mozilla.org/en/docs/Web/HTML/Element/th#Attributes)

## THE CHALLENGE

Create this table:

```
╔══════════╦══════════╦══════════╗
║  Europe  ║   Asia   ║  Africa  ║
╠══════════╬══════════╬══════════╣
║ Ukraine  ║ China    ║ Egypt    ║
╠══════════╬══════════╬══════════╣
║ Poland   ║ India    ║ Kenya    ║
╠══════════╬══════════╬══════════╣
║ Italy    ║ Thailand ║ Sudan    ║
╚══════════╩══════════╩══════════╝
```

Above, first row is a heading row, so you should use `<th>` tag.

After all, check your document with `learnyouhtml verify`.

---

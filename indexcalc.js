<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="cal.css">
</head>
<body>
    <div class="calculator">
        <div class="display" id="display">0</div>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button onclick="deleteLast()">DEL</button>
            <button class="operator" onclick="setOperation('divide')">/</button>
            <button class="operator" onclick="setOperator('multiply')">*</button>

            <button onclick="appenNumber('7')">7</button>
            <button onclick="appenNumber('8')">8</button>
            <button onclick="appenNumber('9')">9</button>
            <button class="operator" onclick="setOperation('subtract')">-</button>

            <button onclick="appenNumber('4')">4</button>
            <button onclick="appenNumber('5')">5</button>
            <button onclick="appenNumber('6')">6</button>
            <button class="operator" onclick="setOperation('addition')">+</button>

            <button onclick="appenNumber('1')">1</button>
            <button onclick="appenNumber('2')">2</button>
            <button onclick="appenNumber('3')">3</button>
            <button class="equals" onclick="calculate()" style="grid-row : span 2;">=</button>

            <button onclick="appendNumber('0')" style="grid-column: span 2;">0</button>
            <button onclick="appendNumber('.')">.</button>
        </div>
    </div>
    <script src="cal.js"></script>
</body>
</html>
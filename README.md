# ng-dom-to-pdf
Convert DOM elements to PDF file and download it.

# Usage

1. Run bower/npm install the package

    `
    npm install ng-dom-to-pdf --save
    `
    
    `
    bower install ng-dom-to-pdf --save
    `

2. Include the package and the required dependencies in the index html:

    ```html
    <script src="../bower_components/angular/angular.js"></script>
    <script src="../bower_components/dom-to-image/dist/dom-to-image.min.js"></script>
    <script src="../bower_components/pdfmake/build/pdfmake.min.js"></script>
    <script src="../dist/ng-dom-to-pdf.min.js"></script>
    ```

3. Add the angular module to the app dependencies:

    ```javascript
    angular
        .module('app' , [
            'ng-dom-to-pdf'
        ]) ;
    ```
    
4. Use the directive in the your html:

    ```html
    <!-- below block will contain the button with the attribute to perform download on click -->
 
    <button pdf-download-button pdf-name="pdf-name.pdf" pdf-element-id = "element-to-download" class="btn">Download As PDF</button>
 
    <!-- below block will be saved as pdf on click-->

    <div pdf-content="element-to-download" class="container">
       Hello World
    </div>
    ```


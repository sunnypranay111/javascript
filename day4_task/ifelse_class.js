"use strict"

var class1 = "1st class"
var class2 = "2nd class"
var class3 = "3rd class"
var class4 = "4th class"
var class5 = "5th class"
var class6 = "6th class"
var class7 = "7th class"
var class8 = "8th class"
var class9 = "9th class"
var class10 = "10th class"
var pass_marks = 35
var obtined_in_class1 = 75
var obtined_in_class2 = 75
var obtined_in_class3 = 75
var obtined_in_class4 = 34
var obtined_in_class5 = 75
var obtined_in_class6 = 75
var obtined_in_class7 = 75
var obtined_in_class8 = 75
var obtined_in_class9 = 75
var obtined_in_class10 = 75

if (obtined_in_class1 >= pass_marks) {
    console.log(class1 + " " + "Pass");
    if (obtined_in_class2 >= pass_marks) {
        console.log(class2 + " " + "Pass");
        if (obtined_in_class3 >= pass_marks) {
            console.log(class3 + " " + "Pass");
            if (obtined_in_class4 >= pass_marks) {
                console.log(class4 + " " + "Pass");
                if (obtined_in_class5 >= pass_marks) {
                    console.log(class5 + " " + "Pass");
                    if (obtined_in_class6 >= pass_marks) {
                        console.log(class6 + " " + "Pass");
                        if (obtined_in_class7 >= pass_marks) {
                            console.log(class7 + " " + "Pass");
                            if (obtined_in_class8 >= pass_marks) {
                                console.log(class8 + " " + "Pass");
                                if (obtined_in_class9 >= pass_marks) {
                                    console.log(class9 + " " + "Pass");
                                    if (obtined_in_class10 >= pass_marks) {
                                        console.log(class10 + " " + "Pass");
                                    } else {
                                        console.log(class10 + " " + "Fail");
                                    }
                                } else {
                                    console.log(class9 + " " + "Fail");
                                }
                            } else {
                                console.log(class8 + " " + "Fail");
                            }
                        } else {
                            console.log(class7 + " " + "Fail");
                        }
                    } else {
                        console.log(class6 + " " + "Fail");
                    }
                } else {
                    console.log(class5 + " " + "Fail");
                }
            } else {
                console.log(class4 + " " + "Fail");
            }
        } else {
            console.log(class3 + " " + "Fail");
        }
    } else {
        console.log(class2 + " " + "Fail");
    }
} else {
    console.log(class1 + " " + "Fail");
}





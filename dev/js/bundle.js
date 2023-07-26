import "lazysizes";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import intersect from "@alpinejs/intersect";

Alpine.plugin(focus);
Alpine.plugin(intersect);

window.Alpine = Alpine;

Alpine.start();

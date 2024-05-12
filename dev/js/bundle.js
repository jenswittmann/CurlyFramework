import "lazysizes";
import Alpine from "alpinejs";
import focus from "@alpinejs/focus";
import intersect from "@alpinejs/intersect";
import collapse from "@alpinejs/collapse";

Alpine.plugin(focus);
Alpine.plugin(intersect);
Alpine.plugin(collapse);

window.Alpine = Alpine;

Alpine.start();

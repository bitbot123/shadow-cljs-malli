(ns core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [malli.core :as m]))

(defn simple-component
  []
  [:div "my first component"])

(defn ^:export run
  []
  (rdom/render [simple-component] (js/document.getElementById "app")))
